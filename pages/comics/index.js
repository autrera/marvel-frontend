import React from 'react';
import ComicsSearch from '../../src/components/ComicsSearch';
import ComicsResults from '../../src/components/ComicsResults';
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
					<ComicsSearch />
				</Grid>
				<Grid item xs={12}>
					<ComicsResults />
				</Grid>
			</Grid>
		</div>
	)
}
