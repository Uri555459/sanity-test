import { client } from '../../../lib/client'

const posts = async (req, res) => {
	const { start, end } = req.query

	if (isNaN(Number(start)) || isNaN(Number(end))) {
		return res.status(400).json({ message: 'Data invalid' })
	}

	const { posts, total } = await loadPosts(start, end)

	res.status(200).json({ posts, total })
}

export const loadPosts = async (start, end) => {
	const query = `{
		'posts':	*[_type == 'post'] | order(publishedDate desc) [${start}...${end}] {_id, publishedDate, title, slug, description, image},
		'total': count(*[_type == 'post'])
	}`
	const { posts, total } = await client.fetch(query)

	return { posts, total }
}

export default posts
