/* eslint-disable no-undef */
async function dropDownContainer() {
  const paramId = getIdFromUrl();
  const photographersValue = window.location.search;
  const urlParams = new URLSearchParams(photographersValue);
  const param1Id = urlParams.get("id");
  const photographerDisplayData = await getPhotographer(paramId);
  const wrapperContainer = document.querySelector(".wrapperContainer");
  wrapperContainer.innerHTML = `
  <section class="dropdown">
  <h2>
      <label class="dropdown-label" id ="dropdown-label">Trier par</label>
  </h2>
  <div class="select-filter" id="select-filter" >
      <button type="button"  aria-haspopup="true" aria-expanded="false" tabindex="0" aria-label="trier par filtres" class="select-filter_button" id="button-dropdown">
        <span id="dropDownLibelle">Popularité</span>
        <span class="arrows fas fa-chevron-down" id="arrow-down"></span> 
      </button>
      <div class="container" id="listContainer">
        <ul role="listbox" aria-expanded="true" class="dropdownlist" id="dropdownlist" aria-activedescendant="option1" tabindex="0">
          <li class="dropdownlist_choice" data-value="popularity" id="option1" role="option" aria-label="trier par popularité" tabindex="0">Popularité</li>
          <li class="dropdownlist_choice" data-value="date" id="option2" role="option" aria-label="trier par date" tabindex="0">Date</li>
          <li class="dropdownlist_choice" data-value="title" id="option3" role="option" aria-label="trier par titre" tabindex="0">Titre</li> 
        </ul> 
        <button type="button"  aria-haspopup="true" aria-expanded="true" tabindex="0" aria-label="fermer le choix de filtres" class="select-filter_button" id="button-dropup">
          <span class="arrows fas fa-chevron-up"></span>   
        </button>
      </div>     
    </div>
  </section>`;

  const dropDownDiv = document.querySelector(".container");
  const chevronDown = document.getElementById("button-dropdown");
  const chevronUp = document.getElementById("button-dropup");
  const libelleFilter = document.querySelector("#dropDownLibelle");
  const popularity = document.getElementById("option1");
  const date = document.getElementById("option2");
  const titre = document.getElementById("option3");

  /// Open dropdown
  function dropDownOpen() {
    dropDownDiv.style.display = "flex";
    chevronDown.setAttribute("aria-expanded", "true");
  }

  /// close dropdown
  function dropDownClose() {
    dropDownDiv.style.display = "none";
    chevronDown.setAttribute("aria-expanded", "false");
    chevronDown.focus();
  }
  chevronDown.addEventListener("click", () => dropDownOpen());
  chevronUp.addEventListener("click", () => dropDownClose());

  /// Select Option
  function selectOption(event) {
    const getLibelle = event.target.innerText;
    libelleFilter.innerText = getLibelle;
    dropDownClose();
    sortAndDisplayBy(event.target.dataset.value);
  }
  /// Event
  popularity.addEventListener("click", selectOption);
  popularity.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      selectOption(e);
    }
  });
  date.addEventListener("click", selectOption);
  date.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      selectOption(e);
    }
  });
  titre.addEventListener("click", selectOption);
  titre.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      selectOption(e);
    }
  });

  const mediasList = await getMedia(paramId);
  displayData(photographerDisplayData, mediasList);

  /// Sort medias
  function sortAndDisplayBy(orderBy) {
    if (orderBy === "popularity") {
      mediasList.sort((a, b) => b.likes - a.likes);
    }
    if (orderBy === "date") {
      mediasList.sort((a, b) => {
        /// new Date allow to transform a date in a string for better facilities to sort
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        return dateA - dateB;
      });
    }
    if (orderBy === "title") {
      mediasList.sort((a, b) => {
        /// toLowerCase don't care and don't take maj or min for the sort of the strings
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
      });
    }
    /// get the media thanks to the function displayMedia
    /// and parameters mediasList+photographerDisplayData
    displayMedia(mediasList, photographerDisplayData);
  }
  sortAndDisplayBy("popularity");
  return param1Id;
}
dropDownContainer;
