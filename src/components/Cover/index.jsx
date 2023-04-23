import cn from 'classnames'

import styles from './index.module.scss'

export const Cover = ({ title, className }) => {
	return (
		<div className={cn(styles.cover, className)}>
			<h1
				className={styles.coverTitle}
				dangerouslySetInnerHTML={{ __html: title }}
			/>
		</div>
	)
}
