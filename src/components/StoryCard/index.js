import React from 'react';
import Link from 'next/link';
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@material-ui/core";
import styles from './StoryCard.module.css';
import Config from '../../config';
import PropTypes from 'prop-types';

const StoryCard = (props) => {
  let thumbnailFullPath = null;
  if (props.data.thumbnail) {
    thumbnailFullPath = `${props.data.thumbnail.path}.${props.data.thumbnail.extension}?apikey=${Config.api.key}`;
  }
	return(
		<Card>
      <CardActionArea>
        { thumbnailFullPath &&
          <CardMedia
          	className={styles.thumbnail}
            image={thumbnailFullPath}
            title={`${props.data.title} thumbnail`}
          />
        }
        <CardContent>
          <Typography noWrap gutterBottom variant="h5" component="h2">
            {props.data.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actions}>
      	<Link href={`/stories/${props.data.id}`}>
	        <Button size="small" color="primary">
	          View
	        </Button>
      	</Link>
      </CardActions>
    </Card>
	)
}

StoryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    })
  })
};

export default StoryCard;
