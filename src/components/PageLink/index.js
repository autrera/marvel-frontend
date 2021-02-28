import React from 'react';
import Link from 'next/link';
import styles from './PageLink.module.css';

function PageLink({ href, children }) {
	return(
		<Link href={href}>
			<div className={styles.root}>
				<a>{children}</a>
			</div>
		</Link>
	)
}

export default PageLink;
