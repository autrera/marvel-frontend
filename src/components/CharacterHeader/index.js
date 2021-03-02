import React from 'react';
import {
	CardMedia,
	Typography
} from "@material-ui/core";
import Config from '../../config';
import styles from './CharacterHeader.module.css';
import PropTypes from 'prop-types';

const CharacterHeader = ({character}) => {
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

CharacterHeader.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    })
  })
};

export default CharacterHeader;
