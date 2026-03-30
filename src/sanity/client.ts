import { createClient, type SanityClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './env'

function createSanityClient(): SanityClient | null {
  if (!projectId) return null
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
  })
}

export const client = createSanityClient()
