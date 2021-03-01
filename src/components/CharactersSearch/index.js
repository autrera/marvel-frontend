import React, { useState, useEffect } from 'react';
import styles from './CharactersSearch.module.css';
import {
	Grid,
	TextField,
	Button,
	Dialog,
	CircularProgress
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { fill } from '../../slices/characters.slice';
import Config from '../../config';
import Autocomplete from '@material-ui/lab/Autocomplete';

function CharactersSearch(props) {
	const [comics, setComics] = useState([]);
	const [stories, setStories] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [showSearchOptions, setShowSearchOptions] = useState(true);

	const [charactersOptions, setCharactersOptions] = useState([]);
	const [loadingCharactersNames, setLoadingCharactersNames] = useState(false);
	const [characterSearchTerm, setCharacterSearchTerm] = useState("");
	const [selectedCharacterName, setSelectedCharacterName] = useState(null);

	const dispatch = useDispatch();

	useEffect(() => {
		if (characterSearchTerm === "") {
			return
		}
    const delayDebounceFn = setTimeout(async() => {
    	setLoadingCharactersNames(true);
	    const res = await fetch(`${Config.api.host}/v1/public/characters?nameStartsWith=${characterSearchTerm}&apikey=${Config.api.key}`);
	    if(res.status >= 400) {
	    }
	    const json = await res.json();
	    if ('data' in json) {
	    	setCharactersOptions(json.data.results.map(character => ({
	    		id: character.id,
	    		name: character.name,
	    	})));
	    }
    	setLoadingCharactersNames(false);
    }, 250);

    return () => clearTimeout(delayDebounceFn)
  }, [characterSearchTerm])

	const fetchCharacters = async () => {
		let params = "apikey=" + Config.api.key;
		if (selectedCharacterName) {
			params += "&name=" + selectedCharacterName.name;
		}
    const res = await fetch(`${Config.api.host}/v1/public/characters?${params}`);
    if(res.status >= 400) {
    }
    const json = await res.json();
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
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
		      			<Autocomplete
						      id="asynchronous-character-name"
						      getOptionSelected={(option, value) => option.id === value.id}
						      getOptionLabel={(option) => option.name}
						      options={charactersOptions}
						      loading={loadingCharactersNames}
						      onKeyUp={event => {setCharacterSearchTerm(event.target.value);}}
						      onChange={(event, value) => {setSelectedCharacterName(value)}}
						      renderInput={(params) => (
						        <TextField
						          {...params}
						          label="Name"
						          InputProps={{
						            ...params.InputProps,
						            endAdornment: (
						              <>
						                {loadingCharactersNames ? <CircularProgress color="inherit" size={20} /> : null}
						                {params.InputProps.endAdornment}
						              </>
						            ),
						          }}
						        />
						      )}
						    />
		      		</Grid>
		      		<Grid item xs={12}>
		      			<TextField
		      				label="Comics"
		      				fullWidth
		      			/>
		      		</Grid>
		      		<Grid item sm={12}>
		      			<TextField
		      				label="Stories"
		      				fullWidth
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
