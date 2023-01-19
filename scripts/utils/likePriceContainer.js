function likePriceContainer(listMedias) {
  const hearts = document.querySelectorAll(".heartLike");

  // console.log(hearts);
  hearts.forEach((items) => {
    // console.log(items.ELEMENT_NODE);
    items.addEventListener("click", (event) => {
      clickTheHeart(event, listMedias);
    });
  });
}
function clickTheHeart(event, listMedias) {
  const totalCounter = document.querySelector("#containertotalLike");
  
  console.log(totalCounter);
  const hearts = document.querySelectorAll(".heartLike");
  let id = event.target.dataset.id;
  let media = listMedias.find((mediaData) => {
    // le return id sera correct s'il correspond à l'id qu'on l'on cherche dans le json
    return id == mediaData.id;
  });

  media.likes++;
  let totalLike = 0;
  listMedias.forEach((media) => {
    // console.log(media);
    media.likes;
    totalLike = totalLike + media.likes;
    // totalLike +=media.likes; (écriture similaire)
    // totalLike = listMedias.reduce((total, media) => total + media.like, 0) () remplace le forEach
  });
  console.log(totalLike);

  totalCounter.textContent = totalLike;
  // console.log(media.likes);
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
  return{
    clickTheHeart,
  }
}
