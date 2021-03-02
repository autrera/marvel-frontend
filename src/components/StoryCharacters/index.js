import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fil, startLoading, stopLoading } from '../../slices/characters.slice';
import Config from '../../config';
import CharactersResults from '../CharactersResults';
import PropTypes from 'prop-types';

const StoryCharacters = (props) => {
	const dispatch = useDispatch();

	useEffect(async() => {
    dispatch(startLoading());
    const res = await fetch(`${Config.api.host}/v1/public/stories/${props.id}/characters?apikey=${Config.api.key}`);
    if(res.status >= 400) {
    }
    const json = await res.json();
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
    dispatch(stopLoading());
	}, []);

	return(
		<CharactersResults />
	)
}

StoryCharacters.propTypes = {
  id: PropTypes.number.isRequired
};

export default StoryCharacters;
