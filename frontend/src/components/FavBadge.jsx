import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ toggleNotification }) => {
  return (
    <div className='fav-badge'>
      <FavIcon
        selected={toggleNotification}
        displayAlert={toggleNotification}
      />
    </div>
  );
};

export default FavBadge;