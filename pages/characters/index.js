import React, { useEffect } from 'react';
import CharactersSearch from '../../src/components/CharactersSearch';
import CharactersResults from '../../src/components/CharactersResults';
import SectionsLinks from '../../src/components/SectionsLinks';
import {
	Grid
} from "@material-ui/core";
import TopRightFloatingContainer from '../../src/components/TopRightFloatingContainer';
import Menu from '../../src/components/Menu';

export default function Page(props) {
	return(
		<div>
      <TopRightFloatingContainer>
        <Menu />
      </TopRightFloatingContainer>
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
