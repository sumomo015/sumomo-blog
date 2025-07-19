import path from 'node:path'

import { App } from 'aws-cdk-lib'

import { BlogStack } from './lib/blog-stack'

import type { Environment } from 'aws-cdk-lib'

const CDK_ACCOUNT = process.env.CDK_ACCOUNT ?? ''
const CDK_REGION = process.env.CDK_REGION ?? ''
const CDK_ZONE_ID = process.env.CDK_ZONE_ID ?? ''
const CDK_ZONE_NAME = process.env.CDK_ZONE_NAME ?? ''
const CDK_DOMAIN_NAME = process.env.CDK_DOMAIN_NAME ?? ''
const CDK_CERTIFICATE_ARN = process.env.CDK_CERTIFICATE_ARN ?? ''

const requiredEnvVars = {
  CDK_ACCOUNT,
  CDK_REGION,
  CDK_ZONE_ID,
  CDK_ZONE_NAME,
  CDK_DOMAIN_NAME,
  CDK_CERTIFICATE_ARN,
}
const missingVars = Object.entries(requiredEnvVars)
  .filter(([, value]) => !value)
  .map(([key]) => key)
if (missingVars.length) {
  throw new Error(`Missing required environment variables for CDK deployment: ${missingVars.join(', ')}`)
}

const env: Environment = {
  account: CDK_ACCOUNT,
  region: CDK_REGION,
}
const ASSETS_PATH = path.join(import.meta.dirname, '.output/public')

const app = new App()

new BlogStack(app, 'SumomoBlogStack', {
  env,
  assetsPath: ASSETS_PATH,
  domainConfig: {
    domainName: CDK_DOMAIN_NAME,
    certificateArn: CDK_CERTIFICATE_ARN,
    hostedZoneId: CDK_ZONE_ID,
    zoneName: CDK_ZONE_NAME,
  },
})
