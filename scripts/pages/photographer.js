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
  //console.log(photographerDisplayData);

  const medias = await getMedia(paramId);
  displayData(photographerDisplayData, medias);
  console.log(medias);
  medias.forEach((media) => {
    console.log(media);
    const mediaModel = mediaFactory(media, photographerDisplayData);
    const mediaSection = document.querySelector(".mediaSection");
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

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
  // console.log(headerSection);
}
