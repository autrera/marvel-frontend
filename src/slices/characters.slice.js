import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'characters',
	initialState: {
    loading: false,
    data: {
      results: []
		},
	},
	reducers: {
		fill: (state, action) => {
			state.data = action.payload;
		},
		append: (state, action) => {
			state.data.results = [
				...state.data.results,
				action.payload
			]
		},
    startLoading: (state, action) => {
      state.loading = true;
    },
    stopLoading: (state, action) => {
      state.loading = false;
    },
	},
});

export const { fill, append, startLoading, stopLoading } = slice.actions;

// Selectors
export const allCharacters = state => state.characters.data.results;
export const getCharacterById = (state, id) => {
	if (state.characters.data.results.length == 0) {
		return null;
	}
	const character = state.characters.data.results.filter(character => id == character.id);
	if (character.length == 0) {
		return null;
	}
	return character[0];
}
export const getLoading = state => state.characters.loading

export default slice.reducer;
