import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import "../styles/PhotoListItem.scss";
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { clickedPhoto, toggleModal, favorites, toggleFavorite } = props;
  const similarphotos = Object.values(clickedPhoto[0].similarphotos);

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={toggleModal} />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton
          selected={favorites.includes(clickedPhoto[0].id)}
          onClick={() => toggleFavorite(clickedPhoto[0].id)}
        />
        <img className="photo-details-modal__image" src={clickedPhoto[0].urls.full} ></img>
        <div className='.photo-details-modal__header'><h3>Similar Photos</h3></div>
        <div>
          <PhotoList
            photos={similarphotos}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            clickedPhoto={clickedPhoto}
            toggleModal={toggleModal}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;