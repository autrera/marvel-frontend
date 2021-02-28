import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/characters.slice';
import comicsReducer from './slices/comics.slice';

export default configureStore({
	reducer: {
		characters: charactersReducer,
		comics: comicsReducer,
	},
});
