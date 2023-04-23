import { format } from 'date-fns'

import { Article, Content, Title } from '../../components'
import { client } from '../../../lib/client'

import styles from './index.module.scss'

const Post = ({ post }) => {
	const date = format(new Date(post.publishedDate), 'dd MMM yyyy')

	return (
		<Article className={styles.post} backUrl='/'>
			<Title className={styles.postTitle}>{post.title}</Title>
			<p className={styles.postDate}>{date}</p>
			<Content body={post.body} />
		</Article>
	)
}

export async function getStaticPaths() {
	const query = `*[_type == 'post'] {
		slug {
			current
		}
	}`

	const posts = await client.fetch(query)
	const paths = posts.map(post => ({
		params: {
			slug: post.slug.current
		}
	}))

	return {
		paths,
		fallback: 'blocking'
	}
}

export async function getStaticProps({ params: { slug } }) {
	const query = `*[_type == 'post' && slug.current == '${slug}'][0]`

	const post = await client.fetch(query)

	return {
		props: {
			post
		}
	}
}

export default Post
