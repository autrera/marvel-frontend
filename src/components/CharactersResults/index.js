import React from 'react';
import { useSelector } from 'react-redux';
import { allCharacters } from '../../slices/characters.slice';
import Character from '../Character';
import {
	Grid
} from "@material-ui/core";

function CharactersResults(props) {
	const characters = useSelector(allCharacters);

	return(
		<div>
			<Grid container spacing={2}>
				{characters.map(character => (
					<Grid
						key={character.id}
						item
						sm={4}
						md={3}
					>
						<Character data={character} />
					</Grid>
				))}
			</Grid>
		</div>
	)
}

export default CharactersResults;
