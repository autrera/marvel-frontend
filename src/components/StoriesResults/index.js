import React from 'react';
import { useSelector } from 'react-redux';
import { allStories } from '../../slices/stories.slice';
import StoryCard from '../StoryCard';
import {
	Grid
} from "@material-ui/core";

function StoriesResults(props) {
	const stories = useSelector(allStories);

	return(
		<Grid container spacing={2}>
			{stories.map(story => (
				<Grid
					key={story.id}
					item
					sm={4}
					md={3}
				>
					<StoryCard data={story} />
				</Grid>
			))}
		</Grid>
	)
}

export default StoriesResults;
