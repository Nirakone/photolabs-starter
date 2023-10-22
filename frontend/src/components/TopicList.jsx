import React from "react";

import "../styles/TopicList.scss";

import TopicListItem from "./TopicListItem";
import FavBadge from "./FavBadge";


const TopicList = (props) => {

  const topicListItemArray = props.topics.map((topic) => {
    return <TopicListItem
      key={Number(topic.id)}
      topic={topic}
      getPhotosOfTopic={props.getPhotosOfTopic}
    />;
  });

  return (
    <div className="top-nav-bar__topic-list">

      {topicListItemArray}
      <FavBadge
        toggleNotification={props.toggleNotification}
      />
    </div>
  );
};

export default TopicList;