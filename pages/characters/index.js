import React from 'react';
import CharactersSearch from '../../src/components/CharactersSearch';
import CharactersResults from '../../src/components/CharactersResults';
import {
	Grid
} from "@material-ui/core";

export default function Page(props) {
	return(
		<div>
			<Grid
				container
				spacing={2}
				style={{ padding: '1rem' }}
			>
				<Grid item xs={12}>
					<CharactersSearch />
				</Grid>
				<Grid item xs={12}>
					<CharactersResults />
				</Grid>
			</Grid>
		</div>
	)
}
