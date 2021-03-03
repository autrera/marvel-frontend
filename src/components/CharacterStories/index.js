import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fill, startLoading, stopLoading } from '../../slices/stories.slice';
import Config from '../../config';
import StoriesResults from '../StoriesResults';
import PropTypes from 'prop-types';

const CharacterStories = (props) => {
	const dispatch = useDispatch();

	useEffect(async() => {
    dispatch(startLoading());
    const res = await fetch(`${Config.api.host}/v1/public/characters/${props.id}/stories?apikey=${Config.api.key}`);
    const json = await res.json();
    if(res.status >= 400) {
        alert(`Code: ${json.code}\nMessage: ${json.status}`);
    }
    if ('data' in json) {
	    dispatch(fill(json.data));
    }
    dispatch(stopLoading());
	}, []);

	return(
		<StoriesResults />
	)
}

CharacterStories.propTypes = {
  id: PropTypes.string.isRequired
};

export default CharacterStories;
