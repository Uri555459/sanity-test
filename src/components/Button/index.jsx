import cn from 'classnames'

import styles from './index.module.scss'

export const Button = ({ className, children, onClick, disabled }) => {
	return (
		<button
			className={cn(styles.button, className)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}
