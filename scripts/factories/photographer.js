function photographerFactory(data) {
  const { city, country, name, tagline, portrait, price, id } = data;
  console.log(price);
  const picture = `assets/photographersMini/${portrait}`;
  // la fonction getUserCardDOM permet :
  function getUserCardDOM() {
    const article = document.createElement("article");
    // fonction permettant au moment ou on clique dessus, de pouvoir accéder à la page du photographer.html
    article.onclick = function () {
      location.href = `photographer.html?id=${id}`;
    };
    const img = document.createElement("img");
    article.appendChild(img);
    img.style.borderRadius = "100%";
    img.style.objectFit = "cover";
    article.style.cursor = "pointer";

    img.setAttribute("src", picture);
    img.alt = name;
    const h2 = document.createElement("h2");
    h2.textContent = name;
    article.appendChild(h2);
    const divCityAndCountry = document.createElement("div");
    divCityAndCountry.textContent = city + ", " + country;
    article.appendChild(divCityAndCountry);
    divCityAndCountry.style.color = "#901c1c";
    const divTagLine = document.createElement("div");
    divTagLine.textContent = tagline;
    article.appendChild(divTagLine);
    divTagLine.style.color = "black";
    divTagLine.style.fontSize = "13px";
    const divPrice = document.createElement("div");
    divPrice.textContent = price + "€/jour";
    article.appendChild(divPrice);
    divPrice.style.color = "#4D4D4D";
    divPrice.style.fontSize = "13px";
    // retourne à l'article
    return article;
  }
  // la fonction Header photographer dont le paramêtre est photographerData crée les éléments suivants dans le photgrapher.html
  function headerPhotographer() {
    const headerSection = document.createElement("div");
    headerSection.className = "photograph-header";
    const titre = document.createElement("h1");
    titre.innerText = name;
    const cityAndCountry = document.createElement("div");
    cityAndCountry.innerText = city + ", " + country;
    const descriptionPhotographer = document.createElement("div");
    descriptionPhotographer.innerText = tagline;
    const profilPicturePhotographer = document.createElement("img");
    profilPicturePhotographer.className += "imgPhotoPage";
    const picture2 = `assets/photographersMini/${portrait}`;
    headerSection.appendChild(profilPicturePhotographer);
    const bouton = document.createElement("button");
    bouton.className = "contact_button";
    bouton.innerText = "Contactez-moi";
    headerSection.appendChild(bouton)
    profilPicturePhotographer.setAttribute("src", picture2);
    console.log(profilPicturePhotographer.src);
    // je veux créer un article ou sera inclu dedans
    const contentHeader = document.createElement("div");
    contentHeader.className += "contentHeader";
    headerSection.appendChild(contentHeader);
    contentHeader.appendChild(titre);
    contentHeader.appendChild(cityAndCountry);
    contentHeader.appendChild(descriptionPhotographer);
    return headerSection;
  }
  // Creation du block page
  function mediaCard() {
    console.log(mediaCard);
    const blockPage = document.getElementById("main");
    const mediaSection = document.createElement("div");
    mediaSection.className = "mediaSection";
    blockPage.appendChild(mediaSection);
    const mediaFilter = document.createElement("div");
    mediaFilter.className += "mediaFilter";
    mediaSection.appendChild(mediaFilter);
    const mediaCards = document.createElement("div");
    mediaCards.className += "mediaCards";
    mediaSection.appendChild(mediaCards);
    mediaSection.innerHTML;
  }
  return { name, picture, getUserCardDOM, headerPhotographer, mediaCard };
}

// création d'un article, pour insérer les cardMedias

// init();
// async function init() {
//   // créer une const qui récupère l'id grâce à l'url
//   // console.log("window Location:", window.location);
//   const photographersValue = window.location.search;
//   // console.log(" photographers values:", photographersValue );
//   const urlParams = new URLSearchParams(photographersValue);
//   const param1Id = urlParams.get("id");
//   // console.log("voici l'id de ce photographe :", param1Id);
//   const photographer = await getPhotographer(param1Id);
//   console.log(photographer);
// 
//   headerPhotographer(photographer);
//   const media = await getMedia(param1Id);
//   console.log(media);
//   mediaCard(media);
// }
