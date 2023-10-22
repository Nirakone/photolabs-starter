import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = (props) => {

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        selected={props.selected}
        onClick={props.toggleFavorite}
      />
      <img className="photo-list__image" src={props.photo.urls.regular} onClick={props.toggleModal}></img>
      <div className="photo-list__user-details ">
        <img className="photo-list__user-profile" src={props.photo.user.profile}></img>
        <div className="photo-list__user-info ">
          {props.photo.user.name}
          <div className="photo-list__user-location ">
            {props.photo.location.city}, {props.photo.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;