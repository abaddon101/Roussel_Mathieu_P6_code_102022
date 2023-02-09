/* eslint-disable no-unused-vars */
/// Take the photographer's data
async function getPhotographer(id) {
  return (
    fetch("./data/photographers.json")
      /// here, then() transform the result in objet js array
      .then((response) => response.json())
      /// here, then() with the find will take on photographer thanks to his id
      .then((response) => {
        // console.log(response);
        const photographer = response.photographers.find(
          (photographerData) =>
            ///  return id will be good if is equal to the id we looking for in the json
            id == photographerData.id
        );
        // console.log(photographer);
        return photographer;
      })
  );
}

/// Take the media's data
async function getMedia(photographerId) {
  return (
    fetch("./data/photographers.json")
      // here, then() transform the result in objet js array
      .then((response) => response.json())
      /// here, then() with the find will take on photographer thanks to his id
      .then((response) => {
        // console.log(response);
        const media = response.media.filter(
          (mediaData) =>
            ///  return id will be good if is equal to the id we looking for in the json
            photographerId == mediaData.photographerId
        );
        return media;
      })
  );
}
/// Take the data in index.html
async function getPhotographers() {
  return fetch("./data/photographers.json").then((response) => response.json());
}
