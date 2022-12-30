/////////////  LightBox /////////////
// au clic de mon movieMediaLink ou de mon imgMediaLink j'active la div lightboxmodal
// je défini ma constante lightboxmodal, ses composant, ses fleche, ses images/video...
function lightBox() {
  const lightboxmodal = document.querySelector(".lightboxModal");
  lightboxmodal.innerHTML = `
    <div class = "lightBoxPArent">
      
      <div class = "lightBoxContent">
        <button class = "lightBoxCLose"><i class="fa-regular fa-xmark"></i></button>
        <div class = "arrows">
          <button class = "lightBoxPrev"><i class="fa-solid fa-chevron-left"></i></button>
          <button class = "lightBoxNext"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
     </div>
    </div>
  `;
  const lightBoxContent = document.querySelector(".lightBoxContent");
  const imgMedia = document.createElement("img");
  const pictureMedia = `assets/FishEye_Photos/Sample Photos/195/Architecture_Dome.jpg`;

  lightBoxContent.appendChild(imgMedia);
  imgMedia.setAttribute("src", pictureMedia);
  imgMedia.id = "lightBoxImg";
  imgMedia.classList = "active";

  const movieMedia = document.createElement("video");
  const videoMedia = `assets/FishEye_Photos/Sample Photos/195/`;

  lightBoxContent.appendChild(movieMedia);
  movieMedia.setAttribute("src", videoMedia);
  movieMedia.id = "lightBoxMovie";
  movieMedia.classList = "active";
  movieMedia.setAttribute("controls", videoMedia);
  movieMedia.addEventListener("click", playPauseMedia);

  function playPauseMedia() {
    play.setAttribute("data-icon", "P");
  }

  const selectObj = document.querySelectorAll(
    ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
  );

  // console.log(selectObj);

  /////////////  création du slider /////////////
  const numberObj = selectObj.length;
  console.log(numberObj);
  const closeBtn = document.querySelector(".lightBoxCLose");
  closeBtn.id = "closeModaleLightBox";
  const next = document.querySelector(".lightBoxNext");
  const prev = document.querySelector(".lightBoxPrev");
  const modaleLightBox = document.querySelector(".lightboxModal");
  const closeModaleLightBox = document.querySelector("#closeModaleLightBox");
  let count = 0;
  ///////////// Function permettant d'utiliser la flèche de droite /////////////
  function nextSlide() {
    if (count < numberObj - 1) {
      count++;
    } else {
      count = 0;
    }

    let lightBoxImg = document.querySelector("#lightBoxImg");
    let lightBoxMovie = document.querySelector("#lightBoxMovie");
    let lightBoxActiveElement = null;
    if (selectObj[count].tagName == "IMG") {
      lightBoxMovie.style.display = "none";
      lightBoxImg.style.display = "block";
      lightBoxActiveElement = lightBoxImg;
    } else {
      lightBoxMovie.style.display = "block";
      lightBoxImg.style.display = "none";
      lightBoxActiveElement = lightBoxMovie;
    }
    console.log(lightBoxActiveElement);
    lightBoxActiveElement.classList.remove("active");

    lightBoxActiveElement.classList.add("active");
    console.log(count);
    console.log(selectObj[count].src);

    lightBoxActiveElement.setAttribute("src", selectObj[count].src);
  }
  next.addEventListener("click", nextSlide);

  ///////////// Function permettant d'utiliser la flèche de gauche /////////////
  function prevSlide() {
    if (count > 0) {
      count--;
    } else {
      // recupère le derier element de mon numberObj
      count = numberObj - 1;
    }
    let lightBoxImg = document.querySelector("#lightBoxImg");
    let lightBoxMovie = document.querySelector("#lightBoxMovie");
    let lightBoxActiveElement = null;
    console.log(count);
    console.log(selectObj);
    if (selectObj[count].tagName == "IMG") {
      lightBoxMovie.style.display = "none";
      lightBoxImg.style.display = "block";
      lightBoxActiveElement = lightBoxImg;
    } else {
      lightBoxMovie.style.display = "block";
      lightBoxImg.style.display = "none";
      lightBoxActiveElement = lightBoxMovie;
    }
    console.log(lightBoxActiveElement);
    lightBoxActiveElement.classList.remove("active");

    lightBoxActiveElement.classList.add("active");

    lightBoxActiveElement.setAttribute("src", selectObj[count].src);
  }
  prev.addEventListener("click", prevSlide);

  ///////////// function permettant au clic de la croix de fermer la modale lightbox /////////////
  function closeLightBox() {
    const modaleLightBox = document.querySelector(".lightboxModal");
    modaleLightBox.style.display = "none";
  }

  closeModaleLightBox.addEventListener("click", closeLightBox);

  function initLightBoxEvent() {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );
    // console.log(selectObj);
    selectObj.forEach((obj) => {
      obj.addEventListener("click", showLightBox);
    });
  }
  ///////////// function permettant de cibler l'élément à afficher  /////////////
  function showLightBox(event) {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );

    let lightBoxImg = document.querySelector("#lightBoxImg");
    let lightBoxMovie = document.querySelector("#lightBoxMovie");

    if (event.target.tagName == "IMG") {
      lightBoxMovie.style.display = "none";
      lightBoxImg.style.display = "block";
      lightBoxActiveElement = lightBoxImg;
    } else {
      lightBoxMovie.style.display = "block";
      lightBoxImg.style.display = "none";
      lightBoxActiveElement = lightBoxMovie;
    }
    lightBoxActiveElement.classList.remove("active");

    lightBoxActiveElement.classList.add("active");

    console.log(event.target.src);
    const modaleLightBox = document.querySelector(".lightboxModal");
    modaleLightBox.style.display = "block";
    lightBoxActiveElement.setAttribute("src", event.target.src);

    count = Array.from(selectObj).indexOf(event.target);
  }
  initLightBoxEvent();
}
