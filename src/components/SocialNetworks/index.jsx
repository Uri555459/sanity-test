import React from 'react'
import cn from 'classnames'

import {
	AiFillYoutube,
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin
} from 'react-icons/ai'

import { ScreenEgg } from '../ScreenEgg'

import styles from './index.module.scss'

const socialNetworks = [
	{
		id: 1,
		href: '#',
		icon: AiFillGithub
	},
	{
		id: 2,
		href: '#',
		icon: AiFillYoutube
	},
	{
		id: 3,
		href: '#',
		icon: AiFillTwitterCircle
	},
	{
		id: 4,
		href: '#',
		icon: AiFillLinkedin
	}
]

export const SocialNetworks = ({ className }) => {
	return (
		<ScreenEgg>
			<ul className={cn(styles.list, className)}>
				{socialNetworks.map(item => (
					<li key={item.id} className={styles.listItem}>
						<a
							className={styles.listLink}
							href={item.href}
							target='_blank'
							rel='noreferrer'
						>
							{React.createElement(item.icon, {
								color: 'black',
								size: 50
							})}
						</a>
					</li>
				))}
			</ul>
		</ScreenEgg>
	)
}
