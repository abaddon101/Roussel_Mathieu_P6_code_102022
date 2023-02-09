/* eslint-disable no-undef */
async function displayData(photographers) {
  /// The const photographersSection select the class photographer_section
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    // console.log(photographerModel);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  /// Take the photographer's data
  const { photographers } = await getPhotographers();
  displayData(photographers);
  // console.log(photographers);
}
init();
