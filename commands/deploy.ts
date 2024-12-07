/* eslint-disable no-console */
import { promisify } from 'node:util'
import fs from 'node:fs'
import path from 'node:path'

import { Storage } from '@google-cloud/storage'

const BUCKET_NAME: string | undefined = process.env.BUCKET_NAME
const ASSETS_DIR = '.output/public'
const STATIC_EXTENSIONS: string[] = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.webp', '.avif']
const STATIC_CACHE_CONTROL = 'public, max-age=86400, must-revalidate'
const HTML_CACHE_CONTROL = 'public, max-age=0, must-revalidate'

if (!BUCKET_NAME) {
  console.error('BUCKET_NAME environment variable is required')
  process.exit(1)
}

const storage = new Storage()
const bucket = storage.bucket(BUCKET_NAME)
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

async function* getFiles(directory: string): AsyncGenerator<string> {
  for (const file of await readdir(directory)) {
    const fullPath = path.join(directory, file)
    const stats = await stat(fullPath)

    if (stats.isDirectory()) yield * getFiles(fullPath)
    if (stats.isFile()) yield fullPath
  }
}

async function uploadFiles(): Promise<void> {
  try {
    await bucket.deleteFiles()

    for await (const filePath of getFiles(ASSETS_DIR)) {
      const destination = path.relative(ASSETS_DIR, filePath)
      const extension = path.extname(filePath)
      const cacheControl: string = STATIC_EXTENSIONS.includes(extension)
        ? STATIC_CACHE_CONTROL
        : HTML_CACHE_CONTROL

      await bucket.upload(filePath, { destination, metadata: { cacheControl } })
    }

    console.log('Files uploaded successfully.')
  }
  catch (error) {
    console.error('Error uploading files:', error)
    process.exit(1)
  }
}

await uploadFiles()
