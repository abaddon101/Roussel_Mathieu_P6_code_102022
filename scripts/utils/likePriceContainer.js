function likePriceContainer(listMediasObject) {
  /// listMediasObject get the array with all the value of the media of the photographer
  const hearts = document.querySelectorAll(".heartLike");
  const footerNavLikeTotal = document.querySelector(".footerNavLikeTotal");
  /// add totalLike here for insert it in the footerNavLikeTotal
  let totalLike = 0;

  listMediasObject.forEach((media) => {
    /// media change the list of array in all object present in this array
    media.likes;
    /// media.like target all the likes in the media Objeect
    totalLike += media.likes;
  });

  footerNavLikeTotal.textContent = totalLike;

  hearts.forEach((littleHeart) => {
    littleHeart.addEventListener("click", (event) => {
      clickTheHeart(event, listMediasObject);
    });
    littleHeart.addEventListener("keypress", (event) => {
      console.log(littleHeart);
      if (event.key == "Enter") {
        clickTheHeart(event, listMediasObject);
      }
    });
  });
}

function clickTheHeart(event, likeMedia) {
  // console.log(likeMedia);
  /// the dataset is put in the media.js directly
  /// in the innerHtml of the heartlikes data-id=" ${media.id}" which allow the take the data
  const { id } = event.target.dataset;
  /// Media, will use param likeMedia for make a find
  /// Then, find take as param objectData
  /// For return id giving it the value objectData.id
  const media = likeMedia.find(
    (objectData) =>
      // Return id  allow to give us the object likeMedia thanks to the param objectData which as
      // id + photographerId + title + image + likes + date + price
      id == objectData.id
  );
  const footerNavLikeTotal = document.querySelector(".footerNavLikeTotal");
  const hearts = event.target;
  /// Get the span heartLikes
  const heartParent = hearts.parentNode;
  /// Get the span likeInfosNumber including the number of like fot the pic'
  const likeP = heartParent.parentNode.querySelector(".likeInfosNumber");

  /// (1x) if the like is clicked =>incrementation
  /// (2x)if the like is clicked  => decrementation
  if (!hearts.classList.contains("clicked")) {
    /// add classList clicked
    media.isClicked = true;
    hearts.classList.add("clicked");
    hearts.classList.add("fa-solid");
    hearts.classList.remove("fa-regular");
    likeP.textContent++; /// incrementation of 1 the likeInfosNumber
    footerNavLikeTotal.textContent++; /// incrementation of 1 the footerNavLikeTotal
    media.likes++; /// incrementation of 1 the total
  } else {
    /// remove classList clicked
    media.isClicked = false;
    hearts.classList.remove("clicked");
    hearts.classList.remove("fa-solid");
    hearts.classList.add("fa-regular");
    likeP.textContent--; /// decrementation of 1 the likeInfosNumber
    footerNavLikeTotal.textContent--; /// decrementation of 1 the footerNavLikeTotal
    media.likes--; /// decrementation of 1 the total
  }
  /// incrementation on click the total'like
  let totalLike = 0;
  likeMedia.forEach((media) => {
    media.likes;
    totalLike += media.likes;
  });
  footerNavLikeTotal.textContent = totalLike;
  console.log(totalLike);
  return {
    clickTheHeart,
  };
}
likePriceContainer;
