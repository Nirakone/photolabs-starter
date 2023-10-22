import React from 'react';

import '../styles/HomeRoute.scss';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={props.topics}
        toggleNotification={props.toggleNotification}
        getPhotosOfTopic={props.getPhotosOfTopic}
      />
      <PhotoList
        photos={props.photos}
        favorites={props.favorites}
        toggleFavorite={props.toggleFavorite}
        clickedPhoto={props.clickedPhoto}
        toggleModal={props.toggleModal}
      />
    </div>
  );
};

export default HomeRoute;