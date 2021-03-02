import React from 'react';
import SectionsLinks from '../src/components/SectionsLinks';
import { makeStyles } from '@material-ui/core/styles';

export default function Page() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SectionsLinks />
    </div>
  )
}

const useStyles = makeStyles({
  root: {
    background: '#ed1d24',
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
