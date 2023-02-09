/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

/// Get the id's photographer
function getIdFromUrl() {
  const photographersValue = window.location.search;
  const urlParams = new URLSearchParams(photographersValue);
  const param1Id = urlParams.get("id");
  return param1Id;
}
dropDownContainer();

/// get and create media, article thanks to the forEach
async function displayMedia(medias, photographerDisplayData) {
  const mediaSection = document.querySelector(".mediaSection");
  mediaSection.innerHTML = "";
  medias.forEach((media) => {
    const mediaModel = mediaFactory(media, photographerDisplayData);
    const mediaCardDOM = mediaModel.getMediaCardDOM();
    mediaSection.appendChild(mediaCardDOM);
  });
  likePriceContainer(medias);
  lightBox();
}

async function displayData(photographer, media) {
  const photographerModel = photographerFactory(photographer, media);

  const headerphotographer = photographerModel.headerPhotographer();
  const headerSection = document.querySelector(".photograph-header-container");
  headerSection.appendChild(headerphotographer);

  const footerPhotographer = photographerModel.footerSection();
  const modalPhotographer = photographerModel.modalElement();
  const footerSection = document.querySelector("#likePriceContainer");
  LaunchModal();
}
