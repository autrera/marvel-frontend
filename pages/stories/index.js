import React from 'react';
import StoriesSearch from '../../src/components/StoriesSearch';
import StoriesResults from '../../src/components/StoriesResults';
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
					<StoriesSearch />
				</Grid>
				<Grid item xs={12}>
					<StoriesResults />
				</Grid>
			</Grid>
		</div>
	)
}
