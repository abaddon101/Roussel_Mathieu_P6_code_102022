async function displayData(photographers) {
  // la constante photographersSection selectionnne la class photographer_section
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}
init();

// Nouvelle fonction ===>

// en fonction du photographe qu'on clique, la page affichée sera celle du photographe ciblé
// definir la variable pour chaque lien
// parametrer pour chaque photographe
