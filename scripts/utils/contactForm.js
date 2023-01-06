function LaunchModal() {
  const btnContact = document.querySelector(".contactButton");
  const submitButton = document.querySelector(".submitButton");
  const closeBtnModal = document.querySelector(".closeContactModal");

  submitButton.addEventListener("click", submitFormular);
  btnContact.addEventListener("click", displayModal);
  closeBtnModal.addEventListener("click", closeModal);

  function submitFormular(e) {
    const first = document.querySelector("#first");
    const validFirstname = function (first) {
      let firstRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
      let testFirstName = firstRegExp.test(first.value);
      console.log(testFirstName);
      return testFirstName;
    };
    const errorMessage = function () {
      let errorMessage = document.querySelector("#missingFirstName");
      errorMessage.style.display = "flex";
    };
    const errorMessageStop = function () {
      let errorMessage = document.querySelector("#missingFirstName");
      errorMessage.style.display = "none";
    };

    if (validFirstname(first) == false) {
      console.log("false");
      const modal = document.querySelector("#contact_modal");
      e.preventDefault();
      errorMessage();
    } else if (validFirstname(first) == true) {
      console.log("true");
      const modal = document.querySelector("#contact_modal");
      modal.style.display = "none";
      e.preventDefault();
      errorMessageStop();
    }

    return submitFormular;
  }

  function displayModal(e) {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "block";
    e.preventDefault();
    return displayModal;
  }

  function closeModal(e) {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "none";
    e.preventDefault();
    return closeModal;
  }
}
