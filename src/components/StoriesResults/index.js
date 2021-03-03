import React from 'react';
import { useSelector } from 'react-redux';
import { allStories, getLoading } from '../../slices/stories.slice';
import StoryCard from '../StoryCard';
import {
	Grid,
  LinearProgress
} from "@material-ui/core";

function StoriesResults(props) {
	const stories = useSelector(allStories);
  const loading = useSelector(getLoading);

	return(
		<Grid container spacing={2}>
			{ loading &&
				<Grid item xs={12}>
          <LinearProgress />
				</Grid>
      }
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
