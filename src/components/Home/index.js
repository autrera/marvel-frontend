import React from 'react';
import styles from './Home.module.css';
import PageLink from '../PageLink';

function Home(props) {
	return(
		<div className={styles.container}>
			<PageLink href="/characters" >
				Characters
			</PageLink>
			<PageLink href="/comics" >
				Comics
			</PageLink>
			<PageLink href="/stories" >
				Stories
			</PageLink>
		</div>
	)
}

export default Home;
