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
// faire le total de ces like
function totalHeartFooter() {
  let totalHeartCount = document.querySelector(".infos_likes--count");
  const containerLikePrice = document.querySelector("#likePriceContainer");

  containerLikePrice.innerHTML = `
  <!-- footer du main-->
       
  <footer class="infos" id="footer-infos">
      <div class="infos_likes">
          <p class="infos_likes--count"></p>
          <span class="infos_likes--icon">
          <i class="heartLikeFooter fa-solid fa-heart"></i>
          </span>
      </div>
      <p class="infos_price"></p>
  </footer>
</main>`;

  // totalHeartCount
}

// au clic de mon coeur, il se rempli
function clickTheHeart(event, listMedias) {
  let id = event.target.dataset.id;
  let media = listMedias.find((mediaData) => {
    // le return id sera correct s'il correspond à l'id qu'on l'on cherche dans le json
    return id == mediaData.id;
  });
  console.log(media.likes);
  media.likes++;
  console.log(media.likes);
}

// lorsque mon coeur est cliqué
// je veux qu'il rajoute 1 à mon total de coeur dans le footer
