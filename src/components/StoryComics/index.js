import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fill, startLoading, stopLoading } from '../../slices/comics.slice';
import Config from '../../config';
import ComicsResults from '../ComicsResults';
import PropTypes from 'prop-types';

const StoryComics = (props) => {
	const dispatch = useDispatch();

	useEffect(async() => {
    dispatch(startLoading());
    const res = await fetch(`${Config.api.host}/v1/public/stories/${props.id}/comics?apikey=${Config.api.key}`);
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
		<ComicsResults />
	)
}

StoryComics.propTypes = {
  id: PropTypes.string.isRequired
};

export default StoryComics;
