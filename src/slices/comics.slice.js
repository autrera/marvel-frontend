import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'comics',
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
				...state.comics.data.results,
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
export const allComics = state => state.comics.data.results;
export const getComicById = (state, id) => {
	if (state.comics.data.results.length == 0) {
		return null;
	}
	const comic = state.comics.data.results.filter(comic => id == comic.id);
	if (comic.length == 0) {
		return null;
	}
	return comic[0];
}
export const getLoading = state => state.comics.loading

export default slice.reducer;
