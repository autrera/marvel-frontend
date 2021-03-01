import React from 'react';
import {
	CardMedia,
	Typography
} from "@material-ui/core";
import Config from '../../config';
import styles from './StoryHeader.module.css';

function StoryHeader({story}) {
	return(
		<div className={styles.root}>
			<CardMedia
				style={{ height: '360px' }}
	      image={`${story.thumbnail.path}.${story.thumbnail.extension}?apikey=${Config.api.key}`}
	      title={`${story.title} image`}
	    />
	    <Typography
	    	className={styles.title}
	    	variant="h2"
	    >
	    	{story.name}
	    </Typography>
		</div>
	)
}

export default StoryHeader;
