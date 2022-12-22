function likePriceContainer() {
  const containerLikePrice = document.querySelector("#likePriceContainer");
  containerLikePrice.innerHTML = `
  <div id="like">
    <span>.</span>
    <i class="fa-solid fa-heart"></i>

  </div>

  <div id="price">
    <span></span>
    <span>/ jour</span>
  </div>

  `;

  const likeObject = document.querySelector("#like");
  const priceObject = document.querySelector("price");
}
