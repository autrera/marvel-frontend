import React from 'react';
import {
	Grid,
	CardMedia
} from "@material-ui/core";
import styles from './ComicImages.module.css';
import Config from '../../config';

function ComicImages(props) {
	return(
		<Grid container spacing={2}>
			{props.images.map(image => (
				<Grid item md={4}>
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

export default ComicImages;
