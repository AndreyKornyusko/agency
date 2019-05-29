import React from 'react';

import styles from './ShowMoreButton.module.scss';

const style = {
  hideButton: { display: 'none' },
};

const ShowMoreButton = ({ handleShowMoreClik }) => (
      <button
        type="button"
        className={styles.button}
        onClick={handleShowMoreClik}
      >
        Show more
      </button>
);

export default ShowMoreButton;
