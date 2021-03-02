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

function StoriesSearch(props) {
	const [format, setFormat] = useState("");
	const [title, setTitle] = useState("");
	const [issue, setIssue] = useState(null);
	const [showSearchOptions, setShowSearchOptions] = useState(true);
	const dispatch = useDispatch();

	const fetchStories = async () => {
    dispatch(startLoading());
    const res = await fetch(`${Config.api.host}/v1/public/stories?apikey=${Config.api.key}`);
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
		      			<TextField
		      				label="Format"
		      				fullWidth
		      			/>
		      		</Grid>
		      		<Grid item xs={12}>
		      			<TextField
		      				label="Title"
		      				fullWidth
		      			/>
		      		</Grid>
		      		<Grid item sm={12}>
		      			<TextField
		      				label="Issue"
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
