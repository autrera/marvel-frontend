import React, { useState, useEffect } from 'react';
import styles from './CharactersSearch.module.css';
import {
	Grid,
	TextField,
	Button,
	Dialog
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { fill, startLoading, stopLoading } from '../../slices/characters.slice';
import Config from '../../config';
import RemoteAsyncAutocomplete from '../RemoteAsyncAutocomplete';

function CharactersSearch(props) {
	const [showSearchOptions, setShowSearchOptions] = useState(true);
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	const [selectedComics, setSelectedComics] = useState(null);
	const [stories, setStories] = useState("");

	const dispatch = useDispatch();

	const fetchCharacters = async () => {
    dispatch(startLoading());
		let params = "apikey=" + Config.api.key;
		if (selectedCharacter) {
			params += "&name=" + selectedCharacter.text;
		}
		if (selectedComics) {
			params += "&comics=" + selectedComics.map(comic => comic.id).join(',');
		}
		if (stories) {
			params += "&stories=" + stories;
		}
    const res = await fetch(`${Config.api.host}/v1/public/characters?${params}`);
    if(res.status >= 400) {
    }
    const json = await res.json();
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
    dispatch(stopLoading());
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
                  id="asynchronous-character-name"
                  url={`${Config.api.host}/v1/public/characters?apikey=${Config.api.key}&nameStartsWith=`}
                  label="Name"
                  textField="name"
                  onChange={setSelectedCharacter}
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
		      		<Grid item sm={12}>
		      			<TextField
		      				label="Stories"
		      				fullWidth
		      				onChange={event => { setStories(event.target.value); }}
		      				value={stories}
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
										fetchCharacters();
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

export default CharactersSearch;
