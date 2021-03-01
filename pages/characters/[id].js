import React, { useState, useEffect } from 'react';
import {
	Grid,
	Tabs,
	Tab,
	CardMedia,
	Typography
} from "@material-ui/core";
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from "react-redux";
import { append, getCharacterById } from '../../src/slices/characters.slice';
import Config from '../../src/config';
import CharacterHeader from '../../src/components/CharacterHeader';
import CharacterComics from '../../src/components/CharacterComics';

export default function Page(props) {
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState(0);

  const router = useRouter();
  const { id } = router.query;

	const character = useSelector((state) => getCharacterById(state, id));
	const dispatch = useDispatch();

  useEffect(async () => {
  	// We try to get the character info from store
  	if (character) {
  		setLoading(false);
  	}
  	// If it is not there then we go to the api
  	if (!character && id) {
	    const res = await fetch(`${Config.api.host}/v1/public/characters/${id}?apikey=${Config.api.key}`);
	    if(res.status >= 400) {
	    }
	    const json = await res.json();
	    if ('data' in json) {
		    dispatch(append(json.data.results[0]));
	  		setLoading(false);
	    }
  	}
  }, [id]);

	return(
		<div>
			{ !loading &&
				<Grid container item spacing={1}>
					<Grid container>
						<Grid item xs={12}>
							<CharacterHeader character={character} />
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12}>
							<Tabs
								indicatorColor="primary"
								value={activeTab}
								onChange={(event, newTab) => {
									setActiveTab(newTab);
								}}
								aria-label="Character options">
			          <Tab label="Comics" />
			          <Tab label="Stories" />
			        </Tabs>
						</Grid>
					</Grid>
					{ activeTab == 0 &&
						<Grid container>
							<Grid item xs={12}>
								<CharacterComics id={id} />
							</Grid>
						</Grid>
					}
				</Grid>
			}
		</div>
	)
}
