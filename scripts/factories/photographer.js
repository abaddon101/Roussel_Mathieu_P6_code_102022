function photographerFactory(data, media) {
  const { city, country, name, tagline, portrait, price, id } = data;
  // const { photographerId, title, image, video, likes, date } = media;
  const picture = `assets/photographersMini/${portrait}`;

  // la fonction getUserCardDOM permet :
  function getUserCardDOM() {
    const article = document.createElement("article");
    // fonction permettant au moment ou on clique dessus, de pouvoir accéder à la page du photographer.html
    article.onclick = function () {
      location.href = `photographer.html?id=${id}`;
    };
    // article présentant les différents photographes
    const img = document.createElement("img");
    article.appendChild(img);
    // ajout aria label avec name pour identifier les photographes
    article.setAttribute("aria-label", name);
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
    titre.className = "nameHeader";
    const cityAndCountry = document.createElement("div");
    cityAndCountry.innerText = city + ", " + country;
    const descriptionPhotographer = document.createElement("div");
    descriptionPhotographer.innerText = tagline;
    const profilPicturePhotographer = document.createElement("img");
    profilPicturePhotographer.className += "imgPhotoPage";
    profilPicturePhotographer.setAttribute("alt", portrait);

    const picture2 = `assets/photographersMini/${portrait}`;
    console.log(picture2);
    headerSection.appendChild(profilPicturePhotographer);
    const bouton = document.createElement("button");
    bouton.className = "contactButton";
    bouton.innerText = "Contactez-moi";
    headerSection.appendChild(bouton);
    profilPicturePhotographer.setAttribute("src", picture2);
    //console.log(profilPicturePhotographer.src);

    const contentHeader = document.createElement("div");
    contentHeader.className += "contentHeader";
    headerSection.appendChild(contentHeader);
    contentHeader.appendChild(titre);
    contentHeader.appendChild(cityAndCountry);
    contentHeader.appendChild(descriptionPhotographer);
    return headerSection;
  }

  function footerSection() {
    const containerLikePrice = document.querySelector("#likePriceContainer");
    // console.log(containerLikePrice);

    const footerTotalLike = document.createElement("div");
    containerLikePrice.appendChild(footerTotalLike);
    footerTotalLike.className += "footerNavLikeTotal";
    footerTotalLike.id = "containertotalLike";
    // let totalLike = mediaLists.reduce((total, media) => total + media.like, 0);
    // footerTotalLike.textContent = totalLike;

    const footerContainer = document.createElement("div");
    containerLikePrice.appendChild(footerContainer);
    footerContainer.className += "footerContainer";

    const divPrice = document.createElement("div");
    divPrice.className += "priceFooter";
    footerContainer.appendChild(divPrice);
    divPrice.textContent = price + "€/jour";

    return containerLikePrice;
  }

  return {
    name,
    picture,
    getUserCardDOM,
    headerPhotographer,
    footerSection,
  };
}
