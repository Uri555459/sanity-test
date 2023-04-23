import cn from 'classnames'

import styles from './index.module.scss'

export const Title = ({ children, className, type }) => {
	if (type === 'small') {
		return (
			<h3 className={cn(styles.title, styles.titleSmall, className)}>
				{children}
			</h3>
		)
	}

	return (
		<h2 className={cn(styles.title, styles.titleMedium, className)}>
			{children}
		</h2>
	)
}
