import cn from 'classnames'

import styles from './index.module.scss'

export const Section = ({ children, className }) => {
	return <div className={cn(styles.section, className)}>{children}</div>
}
