import cn from 'classnames'

import styles from './index.module.scss'
import { ScreenEgg } from '../ScreenEgg'

export const BuyMeCoffee = ({ className }) => {
	return (
		<ScreenEgg type='right'>
			<div className={cn(styles.buyCoffee, className)}>
				<a
					className={styles.buyCoffeeButton}
					href='https://buy.stripe.com/5kA7sL9574SG7xCfZ3'
					target='_blank'
					rel='noreferrer'
				>
					Buy me a coffee...
				</a>
			</div>
		</ScreenEgg>
	)
}
