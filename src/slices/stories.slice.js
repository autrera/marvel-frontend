import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'stories',
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
export const allStories = state => state.stories.data.results;
export const getStoryById = (state, id) => {
	if (state.stories.data.results.length == 0) {
		return null;
	}
	const story = state.stories.data.results.filter(story => id == story.id);
	if (story.length == 0) {
		return null;
	}
	return story[0];
}
export const getLoading = state => state.stories.loading

export default slice.reducer;
