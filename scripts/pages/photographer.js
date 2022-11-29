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
  <section class="dropdown">
  <h2>
      <label class="dropdown-label" id ="dropdown-label">Trier par</label>
  </h2>
  <div class="select-filter" id="select-filter">
      <button type="button"  aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="trier par filtres" class="select-filter_button" id="button-dropdown">
        <span class="option1">&ensp;Popularité</span>
        <span class="arrows fas fa-chevron-down" id="arrow-down"></span> 
      </button>
      <div class="container" id="listContainer">
        <ul role="listbox" aria-expanded="true" class="dropdownlist" id="dropdownlist" aria-activedescendant="option1" tabindex="0">
          <li class="dropdownlist_choice" id="option1" role="option" aria-label="trier par popularité" tabindex="0">&ensp;Popularité</li>
          <li class="dropdownlist_choice" id="option2" role="option" aria-label="trier par date" tabindex="0">&ensp;Date</li>
          <li class="dropdownlist_choice" id="option3" role="option" aria-label="trier par titre" tabindex="0">&ensp;Titre</li> 
        </ul> 
        <button type="button"  aria-haspopup="true" aria-expanded="true" tabindex="0" aria-label="fermer le choix de filtres" class="select-filter_button" id="button-dropup">
          <span class="arrows fas fa-chevron-up"></span>   
        </button>
      </div>     
    </div>
</section>`;

  // mis en place du wrapper
  //////dropdown//////////

  let dropDownDiv = document.querySelector(".container");
  let chevronDown = document.getElementById("button-dropdown");
  let chevronUp = document.getElementById("button-dropup");
  let popularity = document.getElementById("option1");
  let date = document.getElementById("option2");
  let titre = document.getElementById("option3");
  let dropdownButton = document.querySelector(".select-filter_button span");
  /////ouverture du dropdown /////////////
  function dropDownOpen() {
    dropDownDiv.style.display = "flex";
    chevronDown.setAttribute("aria-expanded", "true");
    // dropdownButton.style.zIndex ='0';
    popularity.focus();

    if (date.click()) {
      let popularity = document.getElementById("option1");
      let date = document.getElementById("option2");
      let titre = document.getElementById("option3");
      popularity.style.order = "0";
      date.style.order = "1";
    }
    titre.focus();
  }

  /////fermeture du dropdown/////////////
  function dropDownClose() {
    dropDownDiv.style.display = "none";
    chevronDown.setAttribute("aria-expanded", "false");
    chevronDown.focus();
  }
  chevronDown.addEventListener("click", () => dropDownOpen());
  chevronUp.addEventListener("click", () => dropDownClose());

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
