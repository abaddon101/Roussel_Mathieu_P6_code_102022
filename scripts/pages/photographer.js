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
  //  mediaCard(media);
}
init();

async function displayData(photographer, media) {
  // La const photographerModel appelle  photographerFactory avec comme argument photographer
  const photographerModel = photographerFactory(photographer, media);
  // j'appel headerPhotographer grâce à photographerModel
  const headerphotographer = photographerModel.headerPhotographer();
  const headerSection = document.querySelector(".photograph-header-container");
  headerSection.appendChild(headerphotographer);
  // j'appel mediaCard grâce à photographerModel
   const mediaSection = photographerModel.mediaCard(photographer);

  
  
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