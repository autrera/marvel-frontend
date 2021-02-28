import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'comics',
	initialState: {
		comics: {
			results: []
		},
	},
	reducers: {
		fill: (state, action) => {
			state.comics = action.payload;
		},
	},
});

export const { fill } = slice.actions;

// Selectors
export const allComics = state => state.comics.comics.results;

export default slice.reducer;
