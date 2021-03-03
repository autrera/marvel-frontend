import React from 'react';
import {
	Grid,
	CardMedia
} from "@material-ui/core";
import styles from './ComicImages.module.css';
import Config from '../../config';
import PropTypes from 'prop-types';

const ComicImages = (props) => {
	return(
		<Grid container spacing={2}>
			{props.images.map(image => (
				<Grid key={image.path} item md={4}>
	        <CardMedia
	        	className={styles.thumbnail}
	          image={`${image.path}.${image.extension}?apikey=${Config.api.key}`}
	          title="A comic image"
	        />
				</Grid>
			))}
		</Grid>
	)
}

ComicImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    extension: PropTypes.string.isRequired
  }))
};

export default ComicImages;
