import cn from 'classnames'

import styles from './index.module.scss'

export const ScreenEgg = ({ className, type = 'left', children }) => {
	return (
		<div
			className={cn(styles.screenEgg, className, {
				[styles.screenEggRight]: type === 'right',
				[styles.screenEggLeft]: type === 'left'
			})}
		>
			{children}
		</div>
	)
}
