import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fill, startLoading, stopLoading } from '../../slices/comics.slice';
import Config from '../../config';
import ComicsResults from '../ComicsResults';
import PropTypes from 'prop-types';

const CharacterComics = (props) => {
	const dispatch = useDispatch();

	useEffect(async() => {
    dispatch(startLoading());
    const res = await fetch(`${Config.api.host}/v1/public/characters/${props.id}/comics?apikey=${Config.api.key}`);
    if(res.status >= 400) {
    }
    const json = await res.json();
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
    dispatch(stopLoading());
	}, []);

	return(
		<ComicsResults />
	)
}

CharacterComics.propTypes = {
  id: PropTypes.string.isRequired
};

export default CharacterComics;
