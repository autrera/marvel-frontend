import React from 'react';
import Link from 'next/link';
import styles from './PageLink.module.css';

function PageLink({ href, children }) {
	return(
		<Link href={href}>
			<a>
				<div className={styles.root}>
					{children}
				</div>
			</a>
		</Link>
	)
}

export default PageLink;
