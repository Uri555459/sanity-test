import cn from 'classnames'

import styles from './index.module.scss'

export const PostGrid = ({ className, children }) => {
	return <div className={cn(styles.postGrid, className)}>{children}</div>
}
