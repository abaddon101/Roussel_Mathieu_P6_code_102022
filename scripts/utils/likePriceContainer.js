function likePriceContainer(listMedias) {
  const hearts = document.querySelectorAll(".heartLike");

  console.log(hearts);
  hearts.forEach((heart) => {
    console.log(heart);
    heart.addEventListener("click", (event) => {
      clickTheHeart(event, listMedias);
    });
  });
}
// je souhaite créer le total
// de mes coeurs par photographe dans le footer
// récupérer l'id, grace à l'id récuperer les likes correspondant
// faire le total de ces likes
// function totalHeartFooter() {
  

//   const containerLikePrice = document.querySelector("#likePriceContainer");
//   console.log(containerLikePrice);

//   const divPrice = document.createElement("div");
//   console.log(divPrice);
//   divPrice.className += "priceFooter";
//   containerLikePrice.appendChild(divPrice);
//   //  divPrice.textContent = price + "€/jour";
  
// //   containerLikePrice.innerHTML = `      
// //       <div class="infos_likes">
// //           <p id="likesCount"></p>
// //           <span class="infos_likes--icon">
// //           <i class="heartLikeFooter fa-solid fa-heart"></i>
// //           </span>
// //       </div>
      
// // `;
// }
// au clic de mon coeur, il se rempli
function clickTheHeart(event, listMedias) {
  const hearts = document.querySelectorAll(".heartLike");
  let id = event.target.dataset.id;
  let media = listMedias.find((mediaData) => {
    // le return id sera correct s'il correspond à l'id qu'on l'on cherche dans le json
    return id == mediaData.id;
  });
  media.likes++;
  console.log(media.likes);
}
