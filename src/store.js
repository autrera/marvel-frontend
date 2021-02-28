import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/characters.slice';

export default configureStore({
	reducer: {
		characters: charactersReducer,
	},
});
