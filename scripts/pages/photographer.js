// Retour page accueil
const indexLogo = document.querySelector(".logo");
indexLogo.onclick = function () {
  location.href = "index.html";
};
indexLogo.style.cursor = "pointer";
function setFocusToElements() {
  document.htmlElement().focus;
  console.log(setFocusToElements);
}
//
function getIdFromUrl() {
  const photographersValue = window.location.search;
  const urlParams = new URLSearchParams(photographersValue);
  const param1Id = urlParams.get("id");
  return param1Id;
}
//

async function init() {
  const paramId = getIdFromUrl();
  const photographerDisplayData = await getPhotographer(paramId);
  //console.log(photographerDisplayData);
  const mediaSection = document.querySelector(".mediaSection");
  const wrapperContainer = document.querySelector(".wrapperContainer");
  wrapperContainer.innerHTML = `
  <p>Trier par</p>
  <ul id="sub-pages-menu" class="closed">
    <li>Popularité</li>
    <li>Date</li>
    <li>Titre</li>
  </ul>`;

  // mis en place du wrapper

  const mediasList = await getMedia(paramId);
  displayData(photographerDisplayData, mediasList);
  console.log(mediasList);
  displayMedia(mediasList, photographerDisplayData);
}

init();
// recupère et crée les media, article grâce au forEach
async function displayMedia(medias, photographerDisplayData) {
  medias.forEach((media) => {
    console.log(media);
    const mediaSection = document.querySelector(".mediaSection");
    const mediaModel = mediaFactory(media, photographerDisplayData);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
}

async function displayData(photographer, media) {
  const headerSection = document.querySelector(".photograph-header-container");
  // const mediaSection = document.querySelector(".mediaSection");

  const photographerModel = photographerFactory(photographer, media);

  console.log(photographerModel);
  // j'appel headerPhotographer grâce à photographerModel
  const headerphotographer = photographerModel.headerPhotographer();
  headerSection.appendChild(headerphotographer);
}
