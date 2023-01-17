function mediaFactory(media, photographer) {
  const { photographerId, title, image, video, likes, date } = media;
  const { city, country, name, tagline, portrait, price, id } = photographer;
  //console.log(media);
  // console.log(photographer);

  ///////////// Creation du block page /////////////
  function getMediaCardDOM() {
    //console.log(getMediaCardDOM);

    const article = document.createElement("article");

    if (media.image) {
      const pictureMedia = `assets/FishEye_Photos/Sample Photos/${photographerId}/${image}`;
      const imgMedia = document.createElement("img");
      //const imgMediaLink = document.createElement("a");

      //imgMediaLink.setAttribute("src", pictureMedia);
      article.appendChild(imgMedia);
      //imgMediaLink.appendChild(imgMedia);
      imgMedia.className = "mediaImage";
      imgMedia.setAttribute("src", pictureMedia);
      imgMedia.setAttribute("alt", title);
    }

    // Dans mon article, si je trouve une vidéo dans le dossier je veux qu'elle soit traitée comme tel
    else if (media.video) {
      const videoMedia = `assets/FishEye_Photos/Sample Photos/${photographerId}/${video}`;
      const movieMedia = document.createElement("video");
      movieMedia.setAttribute("alt", title);

      article.appendChild(movieMedia);
      movieMedia.className = "movieMedia";
      movieMedia.setAttribute("src", videoMedia);
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
    heartLikes.innerHTML = '<i class="heartLike fa-solid fa-heart" data-id=" '+ media.id +'"></i>';
  

    return article;
  }

  return {
    mediaFactory,
    getMediaCardDOM,
  };
}
