function LaunchModal() {
  const btnContact = document.querySelector(".contactButton");
  const submitButton = document.querySelector(".submitButton");
  submitButton.addEventListener("click", closeModal);

  const closeBtnModal = document.querySelector(".closeContactModal");

  btnContact.addEventListener("click", displayModal);
  function displayModal(e) {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "block";
    e.preventDefault();
  }

  closeBtnModal.addEventListener("click", closeModal);
  function closeModal(e) {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "none";
    e.preventDefault();
  }
}
