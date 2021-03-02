import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fill } from '../../slices/stories.slice';
import Config from '../../config';
import StoriesResults from '../StoriesResults';
import PropTypes from 'prop-types';

const CharacterStories = (props) => {
	const dispatch = useDispatch();

	useEffect(async() => {
    const res = await fetch(`${Config.api.host}/v1/public/characters/${props.id}/stories?apikey=${Config.api.key}`);
    if(res.status >= 400) {
    }
    const json = await res.json();
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
	}, []);

	return(
		<StoriesResults />
	)
}

CharacterStories.propTypes = {
  id: PropTypes.number.isRequired
};

export default CharacterStories;
