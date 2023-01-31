/////////////  LightBox /////////////
// au clic de mon movieMediaLink ou de mon imgMediaLink j'active la div lightboxmodal
// je défini ma constante lightboxmodal, ses composant, ses fleche, ses images/video...
function lightBox() {
  let tabindex = 0;
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
  imgMedia.setAttribute("tabindex", tabindex);
  imgMedia.id = "lightBoxImg";
  imgMedia.classList = "active";

  const movieMedia = document.createElement("video");
  const videoMedia = `assets/FishEye_Photos/Sample Photos/195/`;

  lightBoxContent.appendChild(movieMedia);
  movieMedia.setAttribute("src", videoMedia);
  movieMedia.setAttribute("tabindex", tabindex);
  movieMedia.id = "lightBoxMovie";
  movieMedia.classList = "active";
  movieMedia.setAttribute("controls", videoMedia);
  movieMedia.addEventListener("click", playPauseMedia);
  movieMedia.addEventListener("keydown", (e) => {
    if (e.key === "Space") {
      console.log(e.key);
      movieMedia.play();
    } else if (e.key === "Enter") {
      console.log(e.key);
      movieMedia.requestFullscreen();
      // For control the sound, please use the arrowUp and arrowDown
    }
  });

  function playPauseMedia(play) {
    // mediaVideo.play();
    play.setAttribute("data-icon", "P");
  }

  const selectObj = document.querySelectorAll(
    ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
  );

  // console.log(selectObj);

  /////////////  création du slider /////////////
  const numberObj = selectObj.length;
  // console.log(numberObj);
  const closeBtn = document.querySelector(".lightBoxCLose");
  closeBtn.id = "closeModaleLightBox";
  const next = document.querySelector(".lightBoxNext");
  const prev = document.querySelector(".lightBoxPrev");
  const modaleLightBox = document.querySelector(".lightboxModal");
  const closeModaleLightBox = document.querySelector("#closeModaleLightBox");
  let count = 0;

  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  const firstFocusableElement =
    modaleLightBox.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
  const focusableContent = modaleLightBox.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

  console.log(firstFocusableElement);
  console.log(focusableContent);
  console.log(lastFocusableElement);
  document.addEventListener("keydown", (e) => {
    let isTabPressed = e.keyCode === 9 || e.key === "enter";
    // console.log(e.keyCode);
    // console.log(e.key);
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      // console.log(e.shiftKey);
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus(); // add focus for the last focusable element
        e.preventDefault();
      }
    } else {
      // if tab key is pressed
      if (document.activeElement === lastFocusableElement) {
        // if focused has reached to last focusable element then focus first focusable element after pressing tab
        firstFocusableElement.focus(); // add focus for the first focusable element
        e.preventDefault();
      }
    }
  });
  /// send back to the first element of the modal when it arrive at end
  //  firstFocusableElement.focus();
  /// Allow the focus inside the modale for accessibility End

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
  closeModaleLightBox.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      // return;
      console.log(e.key);
      return closeLightBox();
    }
  });

  function initLightBoxEvent() {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );

    selectObj.forEach((objs) => {
      objs.addEventListener("click", (event) => {
        console.log(event);
        showLightBox(event);
      });
      objs.addEventListener("keypress", (e) => {
        console.log(e);
        if (e.key == "Enter") {
          console.log(e.key);
          showLightBox(e);
        }
      });
    });
    next.addEventListener("keydown ", (e) => {
      console.log(e.key);
      if (e.key === "Enter") {
        nextSlide(e);
      }
    });
  }
  ///////////// function permettant de cibler l'élément à afficher  /////////////
  function showLightBox(event) {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );

    if (event.target == imgMedia) {
      imgMedia.focus();
    }
    if (event.target == movieMedia) {
      movieMedia.focus();
    }

    let lightBoxImg = document.querySelector("#lightBoxImg");
    lightBoxImg.setAttribute("tabindex", tabindex);
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
    lastFocusableElement.focus();
    lightBoxActiveElement.setAttribute("src", event.target.src);

    count = Array.from(selectObj).indexOf(event.target);
  }
  initLightBoxEvent();
}
