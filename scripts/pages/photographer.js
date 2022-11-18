// Retour page acceuil
const indexLogo = document.querySelector(".logo");
indexLogo.onclick = function () {
  location.href = "index.html";
};
indexLogo.style.cursor = "pointer";
function setFocusToElements() {
  document.htmlElement().focus;
  console.log(setFocusToElements);
}
function getIdFromUrl() {
  const photographersValue = window.location.search;
  const urlParams = new URLSearchParams(photographersValue);
  const param1Id = urlParams.get("id");
  return param1Id;
}
async function init() {
  const paramId = getIdFromUrl();
  const photographerDisplayData = await getPhotographer(paramId);
  console.log(photographerDisplayData);
  // headerPhotographer(photographer);
  const media = await getMedia(paramId);
  displayData(photographerDisplayData, media);
  console.log(media);
  media.forEach((photographer, media) => {
    // const image = document.createElement("img");
    // image.src = `assets/FishEye_Photos/Sample Photos${object.image}.jpg`;
    console.log(photographer.image);
    photographer.photographerId === 243 ||
      photographer.photographerId === 930 ||
      photographer.photographerId === 82 ||
      photographer.photographerId === 527 ||
      photographer.photographerId === 925 ||
      photographer.photographerId === 195 ||
      media.photographerId === 243 ||
      media.photographerId === 930 ||
      media.photographerId === 82 ||
      media.photographerId === 527 ||
      media.photographerId === 925 ||
      media.photographerId === 195;
    // console.log("image du photographe :", object.image);
    // console.log("video du photographe :", object.video);
    const photographerModel = photographerFactory(photographer, media);
    const mediaSection = document.querySelector(".mediaSection");
    const mediaCardDOM = photographerModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });

  //  mediaCard(media);
}
// recupère les données du tableau  getMedia dans api.js

init();
async function displayData(photographer, media) {
  // la constante headerSection selectionnne la class headerSection
  const headerSection = document.querySelector(".photograph-header-container");
  const mediaSection = document.querySelector(".mediaSection");

  // La const photographerModel appelle  photographerFactory avec comme argument photographer
  const photographerModel = photographerFactory(photographer, media);

  console.log(photographerModel);

  // j'appel headerPhotographer grâce à photographerModel
  const headerphotographer = photographerModel.headerPhotographer();

  headerSection.appendChild(headerphotographer);
  console.log(headerSection);

  // j'appel mediaCard grâce à photographerModel
  const mediaCard = photographerModel.getMediaCardDOM();

  // mediaSectionPhotographer.appendChild(mediaCard);

  // const mediaSection = document.querySelector(".mediaSection");
  // const userCarMEdia = photographerModel.mediaCard();
  // mediaSection.appendChild(userCarMEdia);
  // console.log(userCarMEdia);

  // mediaSection.appendChild(mediaCard)
  // dans mon médiaCard je veux insérer les medias img et video
  // par rapport au photgraphId du json et d'un ${}
  //
}

// async function displayData(photographers) {
//   // la constante photographersSection selectionnne la class photographer_section
//   const photographersSection = document.querySelector(".photographer_section");
//
//   photographers.forEach((photographer) => {
//     const photographerModel = photographerFactory(photographer);
//     console.log(photographerModel);
//     const userCardDOM = photographerModel.getUserCardDOM();
//     photographersSection.appendChild(userCardDOM);
//
//   });
// }
