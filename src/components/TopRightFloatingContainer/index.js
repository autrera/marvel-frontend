import React from 'react';
import styles from './TopRightFloatingContainer.module.css';

function TopRightFloatingContainer(props) {
  return(
    <div className={styles.root}>
      {props.children}
    </div>
  )
}

export default TopRightFloatingContainer;
