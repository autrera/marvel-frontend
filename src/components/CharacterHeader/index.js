import React from 'react';
import {
	CardMedia,
	Typography
} from "@material-ui/core";
import Config from '../../config';
import styles from './CharacterHeader.module.css';

function CharacterHeader({character}) {
	return(
		<div className={styles.root}>
			<CardMedia
				style={{ height: '360px' }}
	      image={`${character.thumbnail.path}.${character.thumbnail.extension}?apikey=${Config.api.key}`}
	      title={`${character.name} image`}
	    />
	    <Typography
	    	className={styles.title}
	    	variant="h2"
	    >
	    	{character.name}
	    </Typography>
		</div>
	)
}

export default CharacterHeader;
