import cn from 'classnames'

import styles from './index.module.scss'
import Link from 'next/link'
import { Title } from '../Title'
import Image from 'next/image'
import { urlFor } from '../../../lib/client'

export const Post = ({ className, image, title, description, slug }) => {
	return (
		<Link
			className={cn(styles.post, className)}
			href={`/post/${encodeURIComponent(slug.current)}`}
		>
			<a className={styles.postLink}>
				<Title className={styles.postTitle} type='small'>
					{title}
				</Title>

				<div className={styles.postContent}>
					<div>
						<Image
							src={urlFor(image).url()}
							width='100'
							height='100'
							alt={image.caption}
						/>
					</div>

					<p className={styles.postDescription}>{description}</p>
				</div>
			</a>
		</Link>
	)
}
