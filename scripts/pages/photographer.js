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
  displayData(photographerDisplayData);
  console.log(media);
  // mediaCard(media);
}
init();

async function displayData(photographer) {
  const photographerModel = photographerFactory(photographer);
  const headerphotographer = photographerModel.headerPhotographer();
  const headerSection = document.querySelector(".photograph-header-container");
  headerSection.appendChild(headerphotographer);
}
