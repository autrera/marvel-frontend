import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'characters',
	initialState: {
		characters: {
			results: []
		},
	},
	reducers: {
		fill: (state, action) => {
			state.characters = action.payload;
		},
		append: (state, action) => {
			state.characters.results = [
				...state.characters.results,
				action.payload
			]
		},
	},
});

export const { fill, append } = slice.actions;

// Selectors
export const allCharacters = state => state.characters.characters.results;
export const getCharacterById = (state, id) => {
	if (state.characters.characters.results.length == 0) {
		return null;
	}
	const character = state.characters.characters.results.filter(character => id == character.id);
	if (character.length == 0) {
		return null;
	}
	return character[0];
}

export default slice.reducer;
