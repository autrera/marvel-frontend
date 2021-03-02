import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@material-ui/core";
import styles from './CharacterCard.module.css';
import Config from '../../config';

const CharacterCard = (props) => {

	return(
		<Card>
      <CardActionArea>
        <CardMedia
        	className={styles.thumbnail}
          image={`${props.data.thumbnail.path}.${props.data.thumbnail.extension}?apikey=${Config.api.key}`}
          title={`${props.data.name} thumbnail`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" noWrap component="h2">
            {props.data.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.actions}>
      	<Link href={`/characters/${props.data.id}`}>
	        <Button size="small" color="primary">
	          View
	        </Button>
      	</Link>
      </CardActions>
    </Card>
	)
}

CharacterCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    })
  }),
};

export default CharacterCard;
