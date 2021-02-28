import React, { useState } from 'react';
import styles from './CharactersSearch.module.css';
import {
	Grid,
	TextField,
	Button,
	Dialog
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { fill } from '../../slices/characters.slice';
import Config from '../../config';

function CharactersSearch(props) {
	const [comics, setComics] = useState([]);
	const [stories, setStories] = useState([]);
	const [characters, setCharacters] = useState([]);
	const [showSearchOptions, setShowSearchOptions] = useState(true);
	const dispatch = useDispatch();

	const fetchCharacters = async () => {
    const res = await fetch(`${Config.api.host}/v1/public/characters?apikey=${Config.api.key}`);
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
		      			<TextField
		      				label="Name"
		      				fullWidth
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
		      		<Grid item sm={12}>
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
