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
import { append, getStoryById } from '../../src/slices/stories.slice';
import Config from '../../src/config';
import StoryHeader from '../../src/components/StoryHeader';
import StoryCharacters from '../../src/components/StoryCharacters';
import StoryComics from '../../src/components/StoryComics';

export default function Page(props) {
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState(0);

  const router = useRouter();
  const { id } = router.query;

	const story = useSelector((state) => getStoryById(state, id));
	const dispatch = useDispatch();

  useEffect(async () => {
  	// We try to get the story info from store
  	if (story) {
  		setLoading(false);
  	}
  	// If it is not there then we go to the api
  	if (!story && id) {
	    const res = await fetch(`${Config.api.host}/v1/public/stories/${id}?apikey=${Config.api.key}`);
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
							<StoryHeader story={story} />
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
								aria-label="Story options">
			          <Tab label="Characters" />
			          <Tab label="Comics" />
			        </Tabs>
						</Grid>
					</Grid>
					{ activeTab == 0 &&
						<Grid container>
							<Grid item xs={12}>
								<StoryCharacters id={id} />
							</Grid>
						</Grid>
					}
					{ activeTab == 1 &&
						<Grid container>
							<Grid item xs={12}>
								<StoryComics id={id} />
							</Grid>
						</Grid>
					}
				</Grid>
			}
		</div>
	)
}
