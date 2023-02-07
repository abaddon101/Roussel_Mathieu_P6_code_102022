/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function lightBox() {
  const tabindex = 0;
  let lightBoxActiveElement = null;
  const lightboxmodal = document.querySelector(".lightboxModal");
  lightboxmodal.innerHTML = `
          
      <div class = "lightBoxContent">
        <button class = "lightBoxCLose"><i class="fa-regular fa-xmark"></i></button>
        <div class = "arrows">
          <button class = "lightBoxPrev"><i class="fa-solid fa-chevron-left"></i></button>
          <button class = "lightBoxNext"><i class="fa-solid fa-chevron-right"></i></button>
        </div>
     </div>
    
  `;
  const lightBoxContent = document.querySelector(".lightBoxContent");
  const mediaLegend = document.createElement("div");
  mediaLegend.className = "mediaLegend";
  lightBoxContent.appendChild(mediaLegend);

  const imgMedia = document.createElement("img");
  const pictureMedia = `assets/FishEye_Photos/Sample Photos/195/Architecture_Dome.jpg`;
  mediaLegend.appendChild(imgMedia);
  imgMedia.setAttribute("src", pictureMedia);
  imgMedia.setAttribute("tabindex", tabindex);
  imgMedia.id = "lightBoxImg";
  imgMedia.classList = "active";

  const movieMedia = document.createElement("video");
  const videoMedia = `assets/FishEye_Photos/Sample Photos/195/`;
  mediaLegend.appendChild(movieMedia);
  movieMedia.id = "lightBoxMovie";
  movieMedia.classList = "active";
  movieMedia.setAttribute("src", videoMedia);
  movieMedia.setAttribute("tabindex", tabindex);
  movieMedia.setAttribute("controls", videoMedia);
  movieMedia.addEventListener("click", playPauseMedia);

  let titlelightBoxImg = document.createElement("div");
  titlelightBoxImg.className = "titlelightBoxImg";
  mediaLegend.appendChild(titlelightBoxImg);

  function playPauseMedia(play) {
    play.setAttribute("data-icon", "P");
  }

  const selectObj = document.querySelectorAll(
    ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
  );
  /////////////  création du slider /////////////
  const numberObj = selectObj.length;
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
  const lastFocusableElement = focusableContent[focusableContent.length - 1];
  // get last element to be focused inside modal
  document.addEventListener("keydown", (e) => {
    let isTabPressed = e.keyCode === 9 || e.key === "enter";
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      // if shift key pressed for shift + tab combination
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
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
  firstFocusableElement.focus();
  /// Allow the focus inside the modale for accessibility End

  function nextSlide() {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );
    const selectTitles = document.querySelectorAll(".mediaSection .mediaTitle");
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

    lightBoxActiveElement.classList.remove("active");

    lightBoxActiveElement.classList.add("active");
    console.log(count);
    lightBoxActiveElement.setAttribute("src", selectObj[count].src);
    titlelightBoxImg.textContent = selectTitles[count].innerText;
  }
  next.addEventListener("click", nextSlide);
  /// permet la navigation avec les fleches et escape

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      nextSlide();
    }
    if (e.key === "Escape") {
      closeLightBox();
    }
    if (e.key === "ArrowLeft") {
      prevSlide();
    }
  });

  ///////////// Function permettant d'utiliser la flèche de gauche /////////////
  function prevSlide() {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );
    const selectTitles = document.querySelectorAll(".mediaSection .mediaTitle");
    if (count > 0) {
      count--;
    } else {
      // recupère le dernier element de mon numberObj
      count = numberObj - 1;
    }
    let lightBoxImg = document.querySelector("#lightBoxImg");
    let lightBoxMovie = document.querySelector("#lightBoxMovie");
    let lightBoxActiveElement = null;
    console.log(count);
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
    titlelightBoxImg.textContent = selectTitles[count].innerText;
  }
  prev.addEventListener("click", prevSlide);

  ///////////// function permettant au clic de la croix de fermer la modale lightbox /////////////
  function closeLightBox() {
    const modaleLightBox = document.querySelector(".lightboxModal");
    modaleLightBox.style.display = "none";
    const selectTheFooter = document.getElementById("likePriceContainer");
    selectTheFooter.style.visibility = "visible";
  }

  closeModaleLightBox.addEventListener("click", closeLightBox);
  closeModaleLightBox.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      console.log(e.key);
      closeLightBox();
    }
  });

  function initLightBoxEvent() {
    const selectTheFooter = document.getElementById("likePriceContainer");
    console.log(selectTheFooter);
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );

    selectObj.forEach((objs) => {
      objs.addEventListener("click", (event) => {
        console.log(event);
        showLightBox(event);
        selectTheFooter.style.visibility = "hidden";
      });
      objs.addEventListener("keypress", (e) => {
        console.log(e);
        if (e.key == "Enter") {
          console.log(e.key);
          showLightBox(e);
          selectTheFooter.style.visibility = "hidden";
        }
      });
    });
    // const SelectTheArrow = document.querySelectorAll(
    //   ".lightBoxContent .arrows"
    // );
    // console.log(SelectTheArrow);
    // SelectTheArrow.forEach((arrows) => {
    //   console.log(arrows);
    //   arrows.addEventListener("keydown", (e) => {
    //     if (e.keyCode === 39) {
    //       console.log(e.keyCode);
    //       nextSlide(e);
    //     }
    //   });
    // });
  }
  ///////////// function permettant de cibler l'élément à afficher  /////////////
  function showLightBox(event) {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );

    const selectTitles = document.querySelectorAll(".mediaSection .mediaTitle");

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

    const modaleLightBox = document.querySelector(".lightboxModal");
    modaleLightBox.style.display = "block";
    firstFocusableElement.focus();
    lightBoxActiveElement.setAttribute("src", event.target.src);

    count = Array.from(selectObj).indexOf(event.target);

    console.log(count);
    titlelightBoxImg.textContent = selectTitles[count].innerText;
  }
  initLightBoxEvent();
}
