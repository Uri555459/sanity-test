import cn from 'classnames'
import BlockContent from '@sanity/block-content-to-react'

import { clientConfig } from '../../../lib/client'

import styles from './index.module.scss'

export const Content = ({ className, body }) => {
	const serializers = {
		types: {
			code: props => (
				<pre data-language={props.node.language}>
					<code>{props.node.code}</code>
				</pre>
			)
		}
	}

	return (
		<div className={cn(styles.content, className)}>
			<BlockContent
				blocks={body}
				imageOptions={{ w: 1000, h: 750, fit: 'max' }}
				projectId={clientConfig.projectId}
				dataset={clientConfig.dataset}
			/>
		</div>
	)
}
