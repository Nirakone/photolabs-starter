import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { getPhotosOfTopic } = props;

  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosOfTopic(props.topic.id)}>{props.topic.title}</span>
    </div >
  );
};

export default TopicListItem;