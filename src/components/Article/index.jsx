import Link from 'next/link'
import cn from 'classnames'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import styles from './index.module.scss'

export const Article = ({ children, className, backUrl }) => {
	return (
		<article className={cn(styles.article, className)}>
			<Link href={backUrl}>
				<a className={styles.articleBack}>
					<AiOutlineArrowLeft size={50} />
				</a>
			</Link>
			<div className={styles.articleContent}>{children}</div>
		</article>
	)
}
