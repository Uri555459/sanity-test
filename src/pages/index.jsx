import Head from 'next/head'

import {
	Button,
	BuyMeCoffee,
	Cover,
	Post,
	PostGrid,
	Section,
	SocialNetworks,
	Title
} from '../components'
import { loadPosts } from './api/posts'
import { useEffect, useState } from 'react'

const LOAD_MORE_STEP = 4

const Home = ({ initialPosts, total }) => {
	const [posts, setPosts] = useState(initialPosts)
	const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP)
	const [loading, setLoading] = useState(false)

	const isLoadButton = total > loadedAmount

	const getMorePosts = async () => {
		setLoading(true)

		try {
			const data = await fetch(
				`/api/posts?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
			).then(res => res.json())
			setLoadedAmount(loadedAmount + LOAD_MORE_STEP)
			setPosts([...posts, ...data.posts])
			setLoading(false)
		} catch (error) {
			console.log(error)
			setLoading(false)
		}
	}

	useEffect(() => {}, [])

	return (
		<>
			<Head>
				<title>My Blog</title>
				<meta name='description' content='Generated by create next app' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Section>
				<Cover title='Uri<br /> Beautiful' />
				<SocialNetworks />
				<BuyMeCoffee />
			</Section>

			<Section>
				<Title>New Post</Title>
				<PostGrid>
					{posts.map(post => (
						<Post key={post.slug.current} {...post} />
					))}
				</PostGrid>
				{isLoadButton && (
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<Button onClick={getMorePosts} disabled={loading}>
							Load more posts...
						</Button>
					</div>
				)}
			</Section>
		</>
	)
}

export const getServerSideProps = async () => {
	const { posts, total } = await loadPosts(0, LOAD_MORE_STEP)

	return {
		props: {
			initialPosts: posts,
			total
		}
	}
}

export default Home
