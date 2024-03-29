/* eslint-disable no-unused-vars */
function mediaFactory(media, photographer) {
  const { photographerId, title, image, video, likes, date, isClicked } = media;
  // console.log(media);
  // console.log(title);
  const { city, country, name, tagline, portrait, price, id } = photographer;
  // Creation of the article in the mediaSection

  function getMediaCardDOM() {
    const article = document.createElement("article");
    article.className ="articleMedia"
    const pictureMedia = `assets/FishEye_Photos/Sample Photos/${photographerId}/${image}`;
    const imgMedia = document.createElement("img");
    const videoMedia = `assets/FishEye_Photos/Sample Photos/${photographerId}/${video}`;
    const movieMedia = document.createElement("video");
    const tabindex = 0;
    if (media.image) {
      // console.log(media.image);
      article.appendChild(imgMedia);
      imgMedia.className = "mediaImage";
      imgMedia.setAttribute("src", pictureMedia);
      imgMedia.setAttribute("aria-label", title);
      imgMedia.setAttribute("role", "img");
      imgMedia.setAttribute("alt", title);
      imgMedia.setAttribute("tabindex", tabindex);
      // imgMedia.dataset.title = title;
    } else if (media.video) {
      movieMedia.setAttribute("alt", title);
      article.appendChild(movieMedia);
      movieMedia.className = "movieMedia";
      movieMedia.setAttribute("src", videoMedia);
      movieMedia.setAttribute("aria-label", title);
      movieMedia.setAttribute("role", "img");
      movieMedia.setAttribute("tabindex", tabindex);
      // movieMedia.dataset.title = title;
    }
    const infosArticle = document.createElement("div");
    article.appendChild(infosArticle);
    infosArticle.className = "infosArticle";
    const titleInfos = document.createElement("div");
    titleInfos.className = "mediaTitle";
    infosArticle.appendChild(titleInfos);
    titleInfos.innerText = title;

    const likesInfos = document.createElement("div");
    infosArticle.appendChild(likesInfos);
    likesInfos.className = "likesInfos";
    const likeInfosNumber = document.createElement("span");
    likesInfos.appendChild(likeInfosNumber);
    likeInfosNumber.className += "likeInfosNumber";
    likeInfosNumber.innerText = likes;
    const heartLikes = document.createElement("span");

    likesInfos.appendChild(heartLikes);
    heartLikes.className = "heartLikes";
    if (isClicked !== true) {
      heartLikes.innerHTML = `<i tabindex="0" aria-label="like" class="heartLike fa-regular fa-heart" data-id=" ${media.id}" ></i>`;
    } else {
      heartLikes.innerHTML = `<i tabindex="0" aria-label="like" class="heartLike fa-solid fa-heart" data-id=" ${media.id}" ></i>`;
    }
    return article;
  }
  return {
    mediaFactory,
    getMediaCardDOM,
  };
}
