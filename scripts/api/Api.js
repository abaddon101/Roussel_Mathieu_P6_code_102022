// chargé de recuperer les données des photographes
async function getPhotographer(id) {
  return (
    fetch("./data/photographers.json")
      // Ici, then() transforme le résultat en objet js array
      .then((response) => response.json())
      // Ici, then() avec le find va récupérer un seul photographe avec l'id correspondant
      .then((response) => {
        // console.log(response);
        let photographer = response.photographers.find((photographerData) => {
          // le return id sera correct s'il correspond à l'id qu'on l'on cherche dans le json
          return id == photographerData.id;
        });
        return photographer;
      })
  );
}

// chargé de recuperer les données dess medias
async function getMedia(photographerId) {
  return (
    fetch("./data/photographers.json")
      // Ici, then() transforme le résultat en objet js array
      .then((response) => response.json())
      // Ici, then() avec le find va récupérer un seul photographe avec l'id correspondant
      .then((response) => {
        // console.log(response);
        let media = response.media.filter((mediaData) => {
          // le return id sera correct s'il correspond à l'id qu'on l'on cherche dans le json
          return photographerId == mediaData.photographerId;
        });
        return media;
      })
  );
}
// recupères les data dans le index.html
async function getPhotographers() {
  return fetch("./data/photographers.json").then((response) => response.json());
}
