import React from 'react';
import PageLink from '../PageLink';

function SectionsLinks(props) {
	return(
		<div>
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

export default SectionsLinks;
