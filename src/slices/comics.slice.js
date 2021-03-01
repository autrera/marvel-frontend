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
		append: (state, action) => {
			state.comics.results = [
				...state.comics.results,
				action.payload
			]
		},
	},
});

export const { fill, append } = slice.actions;

// Selectors
export const allComics = state => state.comics.comics.results;
export const getComicById = (state, id) => {
	if (state.comics.comics.results.length == 0) {
		return null;
	}
	const comic = state.comics.comics.results.filter(comic => id == comic.id);
	if (comic.length == 0) {
		return null;
	}
	return comic[0];
}

export default slice.reducer;
