import cdk from 'aws-cdk-lib'
import cloudfront from 'aws-cdk-lib/aws-cloudfront'
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets'
import origins from 'aws-cdk-lib/aws-cloudfront-origins'
import s3 from 'aws-cdk-lib/aws-s3'
import s3deploy from 'aws-cdk-lib/aws-s3-deployment'
import acm from 'aws-cdk-lib/aws-certificatemanager'
import route53 from 'aws-cdk-lib/aws-route53'

import type { Construct } from 'constructs'

const ERROR_TTL_MINS = 5 // 5 minutes
const HTML_REWRITE_FUNCTION_CODE = `
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  }
  else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  return request;
}
`.trim()

interface BlogStackProps extends cdk.StackProps {
  assetsPath: string
  domainConfig?: {
    domainName: string
    certificateArn: string
    hostedZoneId: string
    zoneName: string
  }
}

export class BlogStack extends cdk.Stack {
  public readonly siteBucket: s3.Bucket
  public readonly distribution: cloudfront.Distribution
  public readonly domainRecords?: {
    aRecord: route53.ARecord
    aaaaRecord: route53.AaaaRecord
  }

  public constructor(scope: Construct, id: string, props: BlogStackProps) {
    super(scope, id, props)

    this.siteBucket = this.createS3Bucket()
    const htmlRewriteFn = this.createHtmlRewriteFunction()
    this.distribution = this.createCloudFrontDistribution(this.siteBucket, htmlRewriteFn, props)

    if (props.domainConfig) {
      this.domainRecords = this.createDomainRecords(props.domainConfig)
    }

    this.createBucketDeployment(props.assetsPath)
    this.createOutputs()
  }

  private createS3Bucket(): s3.Bucket {
    return new s3.Bucket(this, 'BlogBucket', {
      accessControl: s3.BucketAccessControl.PRIVATE,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    })
  }

  private createHtmlRewriteFunction(): cloudfront.Function {
    return new cloudfront.Function(this, 'HtmlRewriteFn', {
      code: cloudfront.FunctionCode.fromInline(HTML_REWRITE_FUNCTION_CODE),
      comment: 'Add index.html or .html for pretty URLs',
    })
  }

  private createCloudFrontDistribution(
    siteBucket: s3.Bucket,
    htmlRewriteFn: cloudfront.Function,
    props: BlogStackProps,
  ): cloudfront.Distribution {
    const s3Origin = origins.S3BucketOrigin.withOriginAccessControl(siteBucket)

    return new cloudfront.Distribution(this, 'BlogDistribution', {
      domainNames: props.domainConfig
        ? [props.domainConfig.domainName]
        : undefined,
      certificate: props.domainConfig
        ? acm.Certificate.fromCertificateArn(this, 'SiteCertificate', props.domainConfig.certificateArn)
        : undefined,
      defaultBehavior: {
        origin: s3Origin,
        compress: true,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        functionAssociations: [
          {
            function: htmlRewriteFn,
            eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
          },
        ],
      },
      httpVersion: cloudfront.HttpVersion.HTTP2_AND_3,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
      sslSupportMethod: cloudfront.SSLMethod.SNI,
      defaultRootObject: 'index.html',
      errorResponses: this.getErrorResponses(),
    })
  }

  private createDomainRecords(domainConfig: NonNullable<BlogStackProps['domainConfig']>): {
    aRecord: route53.ARecord
    aaaaRecord: route53.AaaaRecord
  } {
    const zone = route53.HostedZone.fromHostedZoneAttributes(this, 'Zone', {
      hostedZoneId: domainConfig.hostedZoneId,
      zoneName: domainConfig.zoneName,
    })

    const aRecord = new route53.ARecord(this, 'AliasRecordA', {
      zone,
      target: route53.RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
    })

    const aaaaRecord = new route53.AaaaRecord(this, 'AliasRecordAAAA', {
      zone,
      target: route53.RecordTarget.fromAlias(new CloudFrontTarget(this.distribution)),
    })

    return { aRecord, aaaaRecord }
  }

  private createBucketDeployment(assetsPath: string): void {
    new s3deploy.BucketDeployment(this, 'DeployWebsite', {
      sources: [s3deploy.Source.asset(assetsPath)],
      destinationBucket: this.siteBucket,
      distribution: this.distribution,
      distributionPaths: ['/*'],
    })
  }

  private createOutputs(): void {
    new cdk.CfnOutput(this, 'CloudFrontURL', {
      value: `https://${this.distribution.distributionDomainName}`,
      description: 'CloudFront URL',
    })
  }

  private getErrorResponses(): cloudfront.ErrorResponse[] {
    return [
      {
        httpStatus: 404,
        responseHttpStatus: 404,
        responsePagePath: '/404.html',
        ttl: cdk.Duration.minutes(ERROR_TTL_MINS),
      },
      {
        httpStatus: 403,
        responseHttpStatus: 403,
        responsePagePath: '/404.html',
        ttl: cdk.Duration.minutes(ERROR_TTL_MINS),
      },
    ]
  }
}
