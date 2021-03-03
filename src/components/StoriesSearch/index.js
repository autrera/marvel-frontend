import React, { useState } from 'react';
import styles from './StoriesSearch.module.css';
import {
	Grid,
	TextField,
	Button,
	Dialog
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { fill, startLoading, stopLoading } from '../../slices/stories.slice';
import Config from '../../config';
import RemoteAsyncAutocomplete from '../RemoteAsyncAutocomplete';

function StoriesSearch(props) {
	const [showSearchOptions, setShowSearchOptions] = useState(true);
	const [selectedCharacters, setSelectedCharacters] = useState(null);
	const [selectedComics, setSelectedComics] = useState(null);

	const dispatch = useDispatch();

	const fetchStories = async () => {
    dispatch(startLoading());
		let params = `apikey=${Config.api.key}`;
		if (selectedCharacters) {
			params += "&characters=" + selectedCharacters.map(character => character.id).join(',');
		}
		if (selectedComics) {
			params += "&comics=" + selectedComics.map(comic => comic.id).join(',');
		}
    const res = await fetch(`${Config.api.host}/v1/public/stories?${params}`);
    if(res.status >= 400) {
    }
    const json = await res.json();
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
    dispatch(stopLoading());
	}

	const closeFilters = () => {
		setSelectedCharacters(null);
		setSelectedComics(null);
		setShowSearchOptions(false);
	}

	return(
		<div>
			<Button
				variant="outlined"
				color="primary"
				onClick={() => {
					setShowSearchOptions(true);
				}}
			>
				Show search options
			</Button>
			{ showSearchOptions &&
				<Dialog
	        fullWidth={true}
	        maxWidth="xs"
	        open={true}
	        onClose={() => {
	        	setShowSearchOptions(false);
        	}}
	        aria-labelledby="max-width-dialog-title"
	      >
	      	<div style={{ padding: '1rem' }}>
		      	<Grid container spacing={1}>
		      		<Grid item xs={12}>
                <RemoteAsyncAutocomplete
                	multiple={true}
                  id="asynchronous-character-name"
                  url={`${Config.api.host}/v1/public/characters?apikey=${Config.api.key}&nameStartsWith=`}
                  label="Name"
                  textField="name"
                  onChange={setSelectedCharacters}
                />
		      		</Grid>
		      		<Grid item xs={12}>
                <RemoteAsyncAutocomplete
                	multiple={true}
                  id="asynchronous-comics-ids"
                  url={`${Config.api.host}/v1/public/comics?apikey=${Config.api.key}&titleStartsWith=`}
                  label="Comics"
                  textField="title"
                  onChange={setSelectedComics}
                />
		      		</Grid>
		      		<Grid item sm={12} className={styles.actions}>
								<Button
									onClick={() => {
										setShowSearchOptions(false);
									}}
								>
									Cancel
								</Button>
								&nbsp;
								<Button
									color="primary"
									variant="outlined"
									onClick={() => {
										fetchStories();
										setShowSearchOptions(false);
									}}
								>
									Search
								</Button>
		      		</Grid>
		      	</Grid>
	      	</div>
	      </Dialog>
			}
		</div>
	)
}

export default StoriesSearch;
