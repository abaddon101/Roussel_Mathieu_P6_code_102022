/////////////  LightBox /////////////
// au clic de mon movieMediaLink ou de mon imgMediaLink j'active la div lightboxmodal
// je defini ma constante lightboxmodal, ses composant, ses fleche, ses images/video...
function lightBox() {
  //   console.log(lightBox);
  const lightboxmodal = document.querySelector(".lightboxModal");
  const close = document.querySelector(".lightBoxCLose");
  const next = document.querySelector(".lightBoxNext");
  const prev = document.querySelector(".lightBoxPrev");
  lightboxmodal.innerHTML = `
    <div class = "lightBoxPArent">
    <button class = "lightBoxCLose"><i class="fa-regular fa-xmark"></i></button>
    <button class = "lightBoxNext"><i class="fa-solid fa-chevron-right"></i></button>
    <button class = "lightBoxPrev"><i class="fa-solid fa-chevron-left"></i></button>
    <div class = "lightBoxContent"></div>
    </div>
  `;

  const lightBoxContent = document.querySelector(".lightBoxContent");

  const imgMedia = document.createElement("img");

  const pictureMedia = `assets/FishEye_Photos/Sample Photos/195/Architecture_Dome.jpg`;

  lightBoxContent.appendChild(imgMedia);
  imgMedia.setAttribute("src", pictureMedia);
  imgMedia.id = "lightBoxImg";
  imgMedia.setAttribute("src", pictureMedia);

  //   return {
  //     lightBox,
  //   };
}

function initLightBoxEvent() {
  const selectImg = document.querySelectorAll(".mediaSection img.mediaImage");
  console.log(selectImg);
  selectImg.forEach((img) => {
    img.addEventListener("click", showLightBox);
  });
}

function showLightBox(event) {
  console.log(event.target.src);
  let lightBoxImg = document.querySelector("#lightBoxImg");
  lightBoxImg.setAttribute("src", event.target.src);
}
