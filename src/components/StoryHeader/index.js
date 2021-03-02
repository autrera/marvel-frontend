import React from 'react';
import {
	CardMedia,
	Typography
} from "@material-ui/core";
import Config from '../../config';
import styles from './StoryHeader.module.css';
import PropTypes from 'prop-types';

const StoryHeader = ({story}) => {
  let thumbnailFullPath = null;
  if (story.thumbnail) {
    thumbnailFullPath = `${story.thumbnail.path}.${story.thumbnail.extension}?apikey=${Config.api.key}`;
  }
	return(
		<div className={styles.root}>
			{ thumbnailFullPath &&
				<CardMedia
					style={{ height: '360px' }}
		      image={thumbnailFullPath}
		      title={`${story.title} image`}
		    />
			}
	    <Typography
	    	className={styles.title}
	    	variant="h2"
	    >
	    	{story.title}
	    </Typography>
		</div>
	)
}

StoryHeader.propTypes = {
  story: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    })
  })
};

export default StoryHeader;
