import React from 'react';
import {
	CardMedia,
	Typography
} from "@material-ui/core";
import Config from '../../config';
import styles from './ComicHeader.module.css';

function ComicHeader({comic}) {
	return(
		<div className={styles.root}>
			<CardMedia
				style={{ height: '360px' }}
	      image={`${comic.thumbnail.path}.${comic.thumbnail.extension}?apikey=${Config.api.key}`}
	      title={`${comic.title} image`}
	    />
	    <Typography
	    	className={styles.title}
	    	variant="h2"
	    >
	    	{comic.title}
	    </Typography>
		</div>
	)
}

export default ComicHeader;
