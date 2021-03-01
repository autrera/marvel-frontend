import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
	name: 'stories',
	initialState: {
		stories: {
			results: []
		},
	},
	reducers: {
		fill: (state, action) => {
			state.stories = action.payload;
		},
		append: (state, action) => {
			state.stories.results = [
				...state.stories.results,
				action.payload
			]
		},
	},
});

export const { fill, append } = slice.actions;

// Selectors
export const allStories = state => state.stories.stories.results;
export const getStoryById = (state, id) => {
	if (state.stories.stories.results.length == 0) {
		return null;
	}
	const story = state.stories.stories.results.filter(story => id == story.id);
	if (story.length == 0) {
		return null;
	}
	return story[0];
}

export default slice.reducer;
