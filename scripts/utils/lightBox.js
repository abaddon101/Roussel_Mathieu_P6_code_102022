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

  ///  creation of the slider
  const numberObj = selectObj.length;
  const closeBtn = document.querySelector(".lightBoxCLose");
  closeBtn.setAttribute("aria-label", "fermer");
  closeBtn.id = "closeModaleLightBox";
  const next = document.querySelector(".lightBoxNext");
  next.setAttribute("aria-label", "image suivante");
  const prev = document.querySelector(".lightBoxPrev");
  prev.setAttribute("aria-label", "image précédente");
  const closeModaleLightBox = document.querySelector("#closeModaleLightBox");
  closeModaleLightBox.setAttribute("aria-label", "fermer la lightbox");
  let count = 0;

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
    lightBoxActiveElement.setAttribute("src", selectObj[count].src);
    titlelightBoxImg.textContent = selectTitles[count].innerText;

    console.log(count);
  }

  next.addEventListener("click", nextSlide);
  /// Allow navigation with Escape, ArrowLeft, ArrowRight
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

  function prevSlide() {
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );
    const selectTitles = document.querySelectorAll(".mediaSection .mediaTitle");
    if (count > 0) {
      count--;
    } else {
      /// get the last element of numberObj
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

    lightBoxActiveElement.classList.remove("active");
    lightBoxActiveElement.classList.add("active");
    lightBoxActiveElement.setAttribute("src", selectObj[count].src);
    titlelightBoxImg.textContent = selectTitles[count].innerText;
  }
  prev.addEventListener("click", prevSlide);

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
    const selectObj = document.querySelectorAll(
      ".mediaSection img.mediaImage , .mediaSection video.movieMedia"
    );
    selectObj.forEach((objs) => {
      objs.addEventListener("click", (event) => {
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
  }

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
    lightBoxActiveElement.setAttribute("src", event.target.src);

    const modaleLightBox = document.querySelector(".lightboxModal");
    modaleLightBox.style.display = "block";

    count = Array.from(selectObj).indexOf(event.target);
    titlelightBoxImg.textContent = selectTitles[count].innerText;
    console.log(count);
  }
  initLightBoxEvent();
}
