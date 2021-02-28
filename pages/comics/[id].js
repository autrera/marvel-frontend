import React, { useState } from 'react';
import {
	Grid,
	Tabs,
	Tab,
	CardMedia
} from "@material-ui/core";

export default function Page(props) {
	const [activeTab, setActiveTab] = useState(0);

	return(
		<div>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<CardMedia
						style={{ height: '280px' }}
	          image="http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg?apikey=365b3763a0102c0ba16dc631c338210c"
	          title="Character image"
	        />
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid item xs={12}>
					<Tabs
						indicatorColor="primary"
						value={activeTab}
						onChange={(event, newTab) => {
							setActiveTab(newTab);
						}}
						aria-label="Character options">
	          <Tab label="Characters" />
	          <Tab label="Stories" />
	        </Tabs>
				</Grid>
			</Grid>
		</div>
	)
}
