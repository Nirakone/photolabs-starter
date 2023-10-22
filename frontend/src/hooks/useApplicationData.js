import { useEffect, useState } from 'react';


const useApplicationData = () => {

  const [photoData, setPhotoData] = useState([]);
  const [topicData, setTopicData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [clickedPhoto, setClickedPhoto] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState([]);


  // checks if faved or not then faves or unfaves based on previous state
  const updateToFavPhotoIds = (id) => {
    if (favorites.includes(id)) {
      const result = favorites.filter(item => item !== id);
      setFavorites(result);
    } else {
      setFavorites([...favorites, id]);
    }
  };


  const setPhotoSelected = (id) => {
    if (clickedPhoto.length > 0) {
      setClickedPhoto([]);
    } else {
      const result = photoData.filter(photo => photo.id === id);
      setClickedPhoto(result);
    }
  };

  const onClosePhotoDetailsModal = () => {
    setClickedPhoto([]);
  };

  const isNotificationActive = favorites.length > 0;



  /*
photos and topics from api
*/
  const getPhotosOfTopic = (topicID) => {
    if (topicID === 'logo') {
      setSelectedTopic([]);
    } else {
      setSelectedTopic([topicID]);
    }
  };

  useEffect(() => {
    if (selectedTopic.length === 0) {
      fetch('/api/photos')
        .then(response => response.json())
        .then(data => {
          setPhotoData([...data]);
        });
      return;
    }
    if (selectedTopic.length > 0) {
      fetch(`/api/topics/photos/${selectedTopic[0]}/`)
        .then(response => response.json())
        .then(data => {
          setPhotoData([...data]);
        });
      return;
    }
  }, [selectedTopic]);



  // topics from api
  useEffect(() => {
    fetch('/api/topics')
      .then(response => response.json())
      .then(data => {
        setTopicData([...data]);
      });
  }, []);




  const state = {
    favorites,
    clickedPhoto,
    isNotificationActive,
    photoData,
    topicData
  };



  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    getPhotosOfTopic
  };
};

export default useApplicationData;
