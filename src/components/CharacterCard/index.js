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
import styles from './CharacterCard.module.css';

function CharacterCard(props) {

	return(
		<Card>
      <CardActionArea>
        <CardMedia
        	className={styles.thumbnail}
          image={props.data.thumbnail.path + '.' + props.data.thumbnail.extension + "?apikey=365b3763a0102c0ba16dc631c338210c"}
          title={props.data.name + " thumbnail"}
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

export default CharacterCard;
