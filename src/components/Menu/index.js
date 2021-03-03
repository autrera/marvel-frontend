import React, { useState } from 'react';
import {
  IconButton,
  Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SectionsLinks from '../SectionsLinks';
import styles from './Menu.module.css';

function Menu(props) {
  const [showDrawer, setShowDrawer] = useState(false);

  return(
    <div>
      <IconButton
        aria-label="delete"
        onClick={() => {
          setShowDrawer(true);
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={showDrawer}
        onClose={() => { setShowDrawer(false); }}
      >
        <div className={styles.linksContainer}>
          <SectionsLinks />
        </div>
      </Drawer>
    </div>
  )
}

export default Menu;
