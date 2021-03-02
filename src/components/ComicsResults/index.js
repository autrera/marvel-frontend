import React from 'react';
import { useSelector } from 'react-redux';
import { allComics, getLoading } from '../../slices/comics.slice';
import ComicCard from '../ComicCard';
import {
	Grid,
  LinearProgress
} from "@material-ui/core";

function ComicsResults(props) {
	const comics = useSelector(allComics);
  const loading = useSelector(getLoading);

	return(
		<Grid container spacing={2}>
      {loading &&
        <LinearProgress />
      }
			{comics.map(comic => (
				<Grid
					key={comic.id}
					item
					sm={4}
					md={3}
				>
					<ComicCard data={comic} />
				</Grid>
			))}
		</Grid>
	)
}

export default ComicsResults;
