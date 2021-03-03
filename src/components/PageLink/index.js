import React from 'react';
import Link from 'next/link';
import styles from './PageLink.module.css';
import PropTypes from 'prop-types';

const PageLink = ({ href, children }) => {
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

PageLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default PageLink;
