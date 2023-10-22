import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from 'components/TopicList';

const TopNavigation = (props) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => props.getPhotosOfTopic('logo')}>PhotoLabs</span>
      <TopicList
        topics={props.topics}
        toggleNotification={props.toggleNotification}
        getPhotosOfTopic={props.getPhotosOfTopic}
      />
    </div>
  );
};

export default TopNavigation;