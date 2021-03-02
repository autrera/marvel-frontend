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
import { append, getComicById } from '../../src/slices/comics.slice';
import Config from '../../src/config';
import ComicHeader from '../../src/components/ComicHeader';
import ComicCharacters from '../../src/components/ComicCharacters';
import ComicStories from '../../src/components/ComicStories';
import ComicImages from '../../src/components/ComicImages';
import TopRightFloatingContainer from '../../src/components/TopRightFloatingContainer';
import Menu from '../../src/components/Menu';

export default function Page(props) {
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState(0);

  const router = useRouter();
  const { id } = router.query;

	const comic = useSelector((state) => getComicById(state, id));
	const dispatch = useDispatch();

  useEffect(async () => {
  	// We try to get the comic info from store
  	if (comic) {
  		setLoading(false);
  	}
  	// If it is not there then we go to the api
  	if (!comic && id) {
	    const res = await fetch(`${Config.api.host}/v1/public/comics/${id}?apikey=${Config.api.key}`);
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
				<Grid container spacing={2}>
          <TopRightFloatingContainer>
            <Menu />
          </TopRightFloatingContainer>
					<Grid item xs={12}>
						<Grid container>
							<Grid item xs={12}>
								<ComicHeader comic={comic} />
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
									aria-label="Comic options"
								>
				          <Tab label="Description" />
				          <Tab label="Images" />
				          <Tab label="Characters" />
				          <Tab label="Stories" />
				        </Tabs>
							</Grid>
						</Grid>
						{ activeTab == 0 &&
							<Grid container>
								<Grid item xs={12}>
									<Typography
										variant="body1"
										style={{ padding: '1rem' }}
									>
										{comic.description}
									</Typography>
								</Grid>
							</Grid>
						}
						{ activeTab == 1 &&
							<Grid container>
								<Grid item xs={12}>
									<ComicImages images={comic.images} />
								</Grid>
							</Grid>
						}
						{ activeTab == 2 &&
							<Grid container>
								<Grid item xs={12}>
									<ComicCharacters id={id} />
								</Grid>
							</Grid>
						}
						{ activeTab == 3 &&
							<Grid container>
								<Grid item xs={12}>
									<ComicStories id={id} />
								</Grid>
							</Grid>
						}
					</Grid>
				</Grid>
			}
		</div>
	)
}
