import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = client ? imageUrlBuilder(client) : null

export function urlFor(source: Parameters<ReturnType<typeof imageUrlBuilder>['image']>[0]) {
  if (!builder) return { width: () => ({ height: () => ({ url: () => '' }) }), url: () => '' }
  return builder.image(source)
}
