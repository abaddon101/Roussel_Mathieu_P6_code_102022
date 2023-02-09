/* eslint-disable no-unused-vars */
function photographerFactory(data, media) {
  const { city, country, name, tagline, portrait, price, id } = data;
  // console.log(data);
  const indexLogo = document.querySelector(".logo");

  /// Event => access to the Welcome'Page
  function goToTheWelcomePage() {
    location.href = "index.html";
  }
  indexLogo.addEventListener("click", goToTheWelcomePage);
  indexLogo.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      goToTheWelcomePage();
    }
  });

  const tabindex = 0;
  indexLogo.setAttribute("tabindex", tabindex);
  indexLogo.style.cursor = "pointer";
  /// creation of the Welcome'Page
  function getUserCardDOM() {
    const picture = `assets/photographersMini/${portrait}`;

    /// Creation of the cardPhotographer
    const article = document.createElement("article");
    article.className += "cardPhotographer";
    // article.setAttribute('tabindex', tabindex);
    article.setAttribute("aria-label", name);
    /// Event => access to the Photographer
    function goToThePhotoPage() {
      location.href = `photographer.html?id=${id}`;
    }
    article.addEventListener("click", goToThePhotoPage);
    article.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        goToThePhotoPage();
      }
    });

    /// Creation of the picProfil
    const img = document.createElement("img");
    img.className += "picProfil";
    img.setAttribute("tabindex", tabindex);
    article.appendChild(img);
    img.style.borderRadius = "100%";
    img.style.objectFit = "cover";
    article.style.cursor = "pointer";
    img.setAttribute("src", picture);
    img.alt = name;
    /// Creation of the titleName
    const h2 = document.createElement("h2");
    h2.className += "titleName";
    h2.textContent = name;
    article.appendChild(h2);
    /// Creation of the CityAndCountry
    const divCityAndCountry = document.createElement("div");
    divCityAndCountry.className += "CityAndCountry";
    divCityAndCountry.textContent = city + ", " + country;
    article.appendChild(divCityAndCountry);
    divCityAndCountry.style.color = "#901c1c";
    /// Creation of the tagLine
    const divTagLine = document.createElement("div");
    divTagLine.className += "tagLine";
    divTagLine.textContent = tagline;
    article.appendChild(divTagLine);
    divTagLine.style.color = "black";
    divTagLine.style.fontSize = "13px";
    /// Creation of the priceByDay
    const divPrice = document.createElement("div");
    divPrice.className += "priceByDay";
    divPrice.textContent = price + "€/jour";
    article.appendChild(divPrice);
    divPrice.style.color = "#4D4D4D";
    divPrice.style.fontSize = "13px";

    return article;
  }
  /// Creation of the headerPhotographer In the photographer'page
  function headerPhotographer() {
    const headerSection = document.createElement("div");
    headerSection.className = "photograph-header";
    const picture2 = `assets/photographersMini/${portrait}`;

    const titre = document.createElement("h1");
    titre.innerText = name;
    titre.className = "nameHeader";

    const cityAndCountry = document.createElement("div");
    cityAndCountry.innerText = city + ", " + country;

    const descriptionPhotographer = document.createElement("div");
    descriptionPhotographer.innerText = tagline;

    const profilPicturePhotographer = document.createElement("img");
    headerSection.appendChild(profilPicturePhotographer);
    profilPicturePhotographer.className += "imgPhotoPage";
    profilPicturePhotographer.setAttribute("alt", portrait);

    const bouton = document.createElement("button");
    bouton.className = "contactButton";
    bouton.innerText = "Contactez-moi";
    headerSection.appendChild(bouton);
    profilPicturePhotographer.setAttribute("src", picture2);

    const contentHeader = document.createElement("div");
    contentHeader.className += "contentHeader";
    headerSection.appendChild(contentHeader);
    contentHeader.appendChild(titre);
    contentHeader.appendChild(cityAndCountry);
    contentHeader.appendChild(descriptionPhotographer);

    return headerSection;
  }
  function modalElement() {
    const tagNameModal = document.querySelector(".tagNameModal");
    tagNameModal.textContent = name;
    // console.log(tagNameModal);
  }

  /// Creation of the footerSection In the photographer'page
  function footerSection() {
    const containerLikePrice = document.querySelector("#likePriceContainer");

    const contentTotalHeart = document.createElement("div");
    containerLikePrice.appendChild(contentTotalHeart);
    contentTotalHeart.className += "contentTotalHeart";

    const footerTotalLike = document.createElement("div");
    contentTotalHeart.appendChild(footerTotalLike);
    footerTotalLike.className += "footerNavLikeTotal";

    const heartTotalCounter = document.createElement("div");
    heartTotalCounter.className += "heartTotalCounter";
    contentTotalHeart.appendChild(heartTotalCounter);
    heartTotalCounter.innerHTML = '<i class="heartLike fa-solid fa-heart"></i>';

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
    getUserCardDOM,
    headerPhotographer,
    modalElement,
    footerSection,
  };
}
