function mediaFactory(media, photographer) {
  const { photographerId, title, image, video, likes, date } = media;
  const { city, country, name, tagline, portrait, price, id } = photographer;
  //console.log(media);
  // console.log(photographer);

  // Creation du block page
  function getMediaCardDOM() {
    //console.log(getMediaCardDOM);
    const article = document.createElement("article");
    if (media.image) {
      const pictureMedia = `assets/FishEye_Photos/Sample Photos/${photographerId}/${image}`;
      const imgMedia = document.createElement("img");
      imgMedia.className = "mediaImage";
      imgMedia.setAttribute("src", pictureMedia);
      article.appendChild(imgMedia);
    }
    // Dans mon article, si je trouve une vidéo dans le dossier je veux qu'elle soit traitée comme tal
    else if (media.video) {
      const videoMedia = `assets/FishEye_Photos/Sample Photos/${photographerId}/${video}`;
      const movieMedia = document.createElement("video");
      movieMedia.className = "movieMedia";
      movieMedia.setAttribute("src", videoMedia);
      movieMedia.setAttribute("controls", videoMedia);

      article.appendChild(movieMedia);
      //movieMedia.addEventListenner(onclick, play())
      movieMedia.addEventListener("onclick", playPauseMedia);
      function playPauseMedia() {
        //if (media.paused) {
        //  play.setAttribute('data-icon','u');
        //  media.play();
        //} else {
        play.setAttribute("data-icon", "P");
        // media.pause();
        //}
      }
    }
    return article;
  }

  return {
    getMediaCardDOM,
  };
}
