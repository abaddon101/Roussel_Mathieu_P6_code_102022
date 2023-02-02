function likePriceContainer(listMediasObject) {
  const hearts = document.querySelectorAll(".heartLike");
  const footerNavLikeTotal = document.querySelector(".footerNavLikeTotal");

  /// ajout tu totalLike ici pour l'insérer dans le footerNavLikeTotal
  let totalLike = 0;
  listMediasObject.forEach((media) => {
    // console.log(media);
    // console.log(listMediasObject);
    media.likes;
    totalLike += media.likes;
  });
  footerNavLikeTotal.textContent = totalLike;

  // console.log(footerNavLikeTotal);
  // console.log(hearts);
  // au clic de mon items, l'event se lance
  hearts.forEach((littleHeart) => {
    // console.log(littleHeart);
    littleHeart.addEventListener("click", (event) => {
      clickTheHeart(event, listMediasObject);
    });
    littleHeart.addEventListener("keypress", (event) => {
      console.log(littleHeart);
      if (event.key == "Enter") {
        clickTheHeart(event, listMediasObject);
      }
    });
  });
}

function clickTheHeart(event, likeMedia) {
  const { id } = event.target.dataset;
  // console.log(id);
  // console.log(event);
  // console.log(likeMedia);
  /// au clic de l'id, j'ai l'id de la photo
  /// media, va se servir du param likeMedia pour pour faire un find.
  /// le find va ensuite faire une fonction avec comme paramêtre mediaData
  /// afin de retourner l'id en lui donnant la valeur mediaData.id
  const media = likeMedia.find(
    (objectData) =>
      // le return id permet de me renvoyer  l'objet likeMedia grâce au paramêtre mediaData qui possède
      // l'id + photographerId + title + image + likes +date + price

      id == objectData.id 
      
  );
// console.log(clickTheHeart);
  /// condition au clic, incrémentation, Limité à un clic
  const footerNavLikeTotal = document.querySelector(".footerNavLikeTotal");
  /// recupère le i au clic
  const hearts = event.target;
  // console.log(hearts);
  /// recupère le span heartLikes
  const heartParent = hearts.parentNode;
  /// recupère le span likeInfosNumber contenant le nbre de like de la photo
  const likeP = heartParent.parentNode.querySelector(".likeInfosNumber");

  if (!hearts.classList.contains("clicked")) {
    // je lui ajoute la classList clicked
    media.isClicked = true;
    hearts.classList.add("clicked");
    hearts.classList.add("fa-solid");
    hearts.classList.remove("fa-regular");
    likeP.textContent++; // incrémente de 1 le likeInfosNumber
    footerNavLikeTotal.textContent++; // incrémente de 1 le footerNavLikeTotal
    media.likes++; // incrémente de 1 le total
  } else {
    media.isClicked = false;
    hearts.classList.remove("clicked");
    hearts.classList.remove("fa-solid");
    hearts.classList.add("fa-regular");
    likeP.textContent--;
    footerNavLikeTotal.textContent--;
    media.likes--;
  }

  console.log(media.likes);
  // console.log(clickTheHeart);

  /// incrémenation au clic du total de like
  let totalLike = 0;
  likeMedia.forEach((media) => {
    // console.log(media);
    //  console.log(listMediasObject);
    media.likes;
    totalLike += media.likes;
  });
  console.log(totalLike);
  footerNavLikeTotal.textContent = totalLike;

  // totalCounter.textContent = totalLike;
  // current target :  click sur l'élement
  // qui déclenche l'event => recupère ce qu'il y'a derrière
  // const heartButton = event.currentTarget;
  // console.log(heartButton);
  // get the like into the nodeList with the selection of the textContent
  // const counters = heartButton.closest(".likesInfos").textContent;
  // turn the result of like whish is a string into a number
  // let numberCounter = parseInt(counters);
  // console.log(numberCounter);
  // let totalNumberCount = parseInt(totalCounter.innerText);
  // console.log(totalNumberCount);
  // ajoute le total des likes
  // dans le container total du footer(au clic pour le moment...)
  return {
    clickTheHeart,
  };
}
likePriceContainer;
