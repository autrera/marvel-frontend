import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fill } from '../../slices/comics.slice';
import Config from '../../config';
import ComicsResults from '../ComicsResults';
import PropTypes from 'prop-types';

const CharacterComics = (props) => {
	const dispatch = useDispatch();

	useEffect(async() => {
    const res = await fetch(`${Config.api.host}/v1/public/characters/${props.id}/comics?apikey=${Config.api.key}`);
    if(res.status >= 400) {
    }
    const json = await res.json();
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
	}, []);

	return(
		<ComicsResults />
	)
}

CharacterComics.propTypes = {
  id: PropTypes.number.isRequired
};

export default CharacterComics;
