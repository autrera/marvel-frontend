import React from 'react';
import { useSelector } from 'react-redux';
import { allCharacters, getLoading } from '../../slices/characters.slice';
import CharacterCard from '../CharacterCard';
import {
	Grid,
  LinearProgress
} from "@material-ui/core";

function CharactersResults(props) {
	const characters = useSelector(allCharacters);
  const loading = useSelector(getLoading);

	return(
		<div>
			<Grid container spacing={2}>
        { loading &&
					<Grid item xs={12}>
	          <LinearProgress />
					</Grid>
        }
				{characters.map(character => (
					<Grid
						key={character.id}
						item
						sm={4}
						md={3}
					>
						<CharacterCard data={character} />
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default CharactersResults;
