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
      movieMedia.addEventListener("onclick", playPauseMedia);
      function playPauseMedia() {
        play.setAttribute("data-icon", "P");
      }
    }
    const infosArticle = document.createElement("div");
    article.appendChild(infosArticle);
    infosArticle.className = "infosArticle";
    const titleInfos = document.createElement("div");
    infosArticle.appendChild(titleInfos);
    titleInfos.innerText = title;

    const likesInfos = document.createElement("div");
    infosArticle.appendChild(likesInfos);
    likesInfos.className = "likesInfos";

    likesInfos.innerText = likes;
    const heartLikes = document.createElement("span");
    heartLikes.className = "heartLikes";
    likesInfos.appendChild(heartLikes);
    heartLikes.innerHTML = '<i class="fa-solid fa-heart"></i>';

    return article;
  }

  return {
    getMediaCardDOM,
  };
}
