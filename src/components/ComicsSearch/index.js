import React, { useState } from 'react';
import styles from './ComicsSearch.module.css';
import {
	Grid,
	TextField,
	Button,
	Dialog
} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { fill, startLoading, stopLoading } from '../../slices/comics.slice';
import Config from '../../config';
import RemoteAsyncAutocomplete from '../RemoteAsyncAutocomplete';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { formatTypes } from '../../constants';

function ComicsSearch(props) {
	const [selectedFormat, setSelectedFormat] = useState(null);
	const [issue, setIssue] = useState("");
	const [title, setTitle] = useState("");
	const [showSearchOptions, setShowSearchOptions] = useState(true);

	const dispatch = useDispatch();

	const fetchComics = async () => {
    dispatch(startLoading());
		let params = `apikey=${Config.api.key}&orderBy=issueNumber`;
		if (selectedFormat) {
			params += "&format=" + selectedFormat.id;
		}
		if (title) {
			params += "&titleStartsWith=" + title;
		}
		if (issue) {
			params += "&issueNumber=" + issue;
		}
    const res = await fetch(`${Config.api.host}/v1/public/comics?${params}`);
    const json = await res.json();
    if(res.status >= 400) {
    	alert(`Code: ${json.code}\nMessage: ${json.status}`);
    }
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
    dispatch(stopLoading());
  	closeFilters();
	}

	const closeFilters = () => {
    setSelectedFormat(null);
    setIssue("");
    setTitle("");
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
	        	closeFilters();
        	}}
	        aria-labelledby="max-width-dialog-title"
	      >
	      	<div style={{ padding: '1rem' }}>
		      	<Grid container spacing={1}>
		      		<Grid item xs={12}>
						    <Autocomplete
						      id="comic-format-filter"
						      getOptionSelected={(option, value) => option.id === value.id}
						      getOptionLabel={option => option.id.replace(/\b\w/g, l => l.toUpperCase())}
						      options={formatTypes}
						      onChange={(event, value) => {
						      	setSelectedFormat(value);
						      }}
						      renderInput={params => (
						        <TextField
						          {...params}
						          label="Format"
						        />
						      )}
						    />
		      		</Grid>
		      		<Grid item xs={12}>
		      			<TextField
		      				id="comics-title-filter"
		      				label="Title"
		      				fullWidth
		      				value={title}
		      				onChange={event => {
		      					setTitle(event.target.value);
		      				}}
		      			/>
		      		</Grid>
		      		<Grid item sm={12}>
		      			<TextField
		      				id="comics-issue-filter"
		      				label="Issue"
		      				fullWidth
		      				value={issue}
		      				onChange={event => {
		      					setIssue(event.target.value);
		      				}}
		      			/>
		      		</Grid>
		      		<Grid item sm={12} className={styles.actions}>
								<Button
									onClick={() => {
					        	closeFilters();
									}}
								>
									Cancel
								</Button>
								&nbsp;
								<Button
									color="primary"
									variant="outlined"
									onClick={() => {
										fetchComics();
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

export default ComicsSearch;
