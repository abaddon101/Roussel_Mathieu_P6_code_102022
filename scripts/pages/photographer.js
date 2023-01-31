/////////////   /////////////
function getIdFromUrl() {
  const photographersValue = window.location.search;
  console.log(photographersValue);

  const urlParams = new URLSearchParams(photographersValue);
  console.log(urlParams);

  const param1Id = urlParams.get("id");
  console.log(param1Id);
  return param1Id;
}
dropDownContainer();

///////////// recupère et crée les media, article grâce au forEach /////////////
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
  // likePriceContainer(media);
  LaunchModal();
}
