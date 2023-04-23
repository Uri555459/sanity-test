import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const clientConfig = {
	projectId: 'kf4zbd5o',
	dataset: 'production'
}

export const client = sanityClient({
	...clientConfig,
	useCdn: true,
	apiVersion: '2023-04-23',
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	ignoreBrowserTokenWarning: true
})

const builder = imageUrlBuilder(client)

export const urlFor = source => builder.image(source)
