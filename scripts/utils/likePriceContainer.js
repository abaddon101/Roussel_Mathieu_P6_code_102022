function likePriceContainer(listMediasObject) {
  const hearts = document.querySelectorAll(".heartLike");
  const footerNavLikeTotal = document.querySelector(".footerNavLikeTotal");

  /// ajout tu totalLike ici pour l'insérer dans le footerNavLikeTotal
  let totalLike = 0;
  listMediasObject.forEach((media) => {
    // console.log(media);
    // console.log(listMediasObject);
    media.likes;
    totalLike = totalLike + media.likes;
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
  });
}

function clickTheHeart(event, likeMedia) {
  let id = event.target.dataset.id;
  console.log(id);
  /// au clic de l'id, j'ai l'id de la photo
  /// media, va se servir du param likeMedia pour pour faire un find.
  /// le find va ensuite faire une fonction avec comme paramêtre mediaData
  /// afin de retourner l'id en lui donnant la valeur mediaData.id
  let media = likeMedia.find((objectData) => {
    // le return id permet de me renvoyer  l'objet likeMedia grâ au paramêtre mediaData qui possède
    // l'id + photographerId + title + image + likes +date + price
    // console.log(objectData);
    // console.log(objectData.id);
    return id == objectData.id;
  });

  // console.log(id);

  /// condition au clic, incrémentation, Limité à un clic
  const footerNavLikeTotal = document.querySelector(".footerNavLikeTotal")
  /// recupère le i au clic
  let hearts = event.target;
  /// recupère le span heartLikes
  let heartParent = hearts.parentNode;
  /// recupère le span likeInfosNumber contenant le nbre de like de la photo
  let likeP = heartParent.parentNode.querySelector(".likeInfosNumber");

  if (
    /// si ma cible à pour nom de classe heartLike fa-solid fa-hear et
    /// et que le span heartLikes est cliqué
    event.target.className === "heartLike fa-solid fa-heart" &&
    heartParent.className !== "clicked"
  ) {
    // pour n'autoriser qu'un seul clic par image'
    // je lui ajoute la classList clicked
    hearts.classList.add("clicked");
    likeP.textContent++; // incrémente de 1 le likeInfosNumber
    footerNavLikeTotal.textContent++; // incrémente de 1 le footerNavLikeTotal
    media.likes++; // incrémente de 1 le total
  } else if (
    event.target.className === "heartLike fa-solid fa-heart" &&
    heartParent.className == "clicked"
  ) {
    hearts.classList.add("clicked");
    likeP.textContent--;
    footerNavLikeTotal.textContent--;
    media.likes--;
  }

  console.log(media.likes);

  /// incrémenation au clic du total de like
  let totalLike = 0;
  likeMedia.forEach((media) => {
    // console.log(media);
    //  console.log(listMediasObject);
    media.likes;
    totalLike = totalLike + media.likes;
    // totalLike += media.likes;
    //  (écriture similaire)
    // totalLike = listMediasObject.reduce((total, media) => total + media.like, 0)
    //  () remplace le forEach
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
}
