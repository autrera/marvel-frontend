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
	},
});

export const { fill } = slice.actions;

// Selectors
export const allCharacters = state => state.characters.characters.results;

export default slice.reducer;
