function LaunchModal() {
  const btnContact = document.querySelector(".contactButton");
  const submitButton = document.querySelector(".submitButton");
  const closeBtnModal = document.querySelector(".closeContactModal");

  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const modal = document.querySelector("#contact_modal");

  const focusableElement = "button, input, img ";
  console.log(focusableElement);

  const firstFocusableElement = modal.querySelectorAll(focusableElement)[0];
  console.log(firstFocusableElement);

  const focusableContent = modal.querySelectorAll(focusableElement);
  console.log(focusableContent);

  const lastFocusableElement = focusableContent[focusableContent.length - 1];
  console.log(lastFocusableElement);

  submitButton.addEventListener("click", submitFormular);
  btnContact.addEventListener("click", displayModal);
  closeBtnModal.addEventListener("click", closeModal);

  function submitFormular(e) {
    ///
    const validFirstname = function (first) {
      let firstRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
      let testFirstName = firstRegExp.test(first.value);
      console.log(testFirstName);
      return testFirstName;
    };
    ///
    const validLastName = function (last) {
      let lastRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
      let testLastName = lastRegExp.test(last.value);
      console.log(testLastName);
      return testLastName;
    };
    ///
    const validEmail = function (email) {
      let emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+.[a-z]{2,10}$",
        "i"
      );
      let testEmail = emailRegExp.test(email.value);
      console.log(testEmail);
      return testEmail;
    };
    ///
    const validMessage = function (message) {
      let messageRegExp = new RegExp("^[a-zA-Z]{10,}$", "i");
      let testMessageName = messageRegExp.test(message.value);
      console.log(testMessageName);
      return testMessageName;
    };
    const errorMessage = function () {
      let errorMessageFirstName = document.querySelector("#missingFirstName");
      first.style.border = "2px solid red";
      errorMessageFirstName.style.display = "flex";
      ///
      let errorMessageLastName = document.querySelector("#missingLastName");
      last.style.border = "2px solid red";
      errorMessageLastName.style.display = "flex";
      ///
      let errorMessageEmail = document.querySelector("#missingEmail");
      email.style.border = "2px solid red";
      errorMessageEmail.style.display = "flex";
      ///
      let errorMessageMsg = document.querySelector("#missingMessage");
      message.style.border = "2px solid red";
      errorMessageMsg.style.display = "flex";
    };

    const errorMessageStop = function () {
      let errorMessageFirstName = document.querySelector("#missingFirstName");
      first.style.border = "none";
      errorMessageFirstName.style.display = "none";
      ///
      let errorMessageLastName = document.querySelector("#missingLastName");
      first.style.border = "none";
      errorMessageLastName.style.display = "none";
      ///
      let errorMessageEmail = document.querySelector("#missingEmail");
      first.style.border = "none";
      errorMessageEmail.style.display = "none";
      ///
      let errorMessageMsg = document.querySelector("#missingMessage");
      first.style.border = "none";
      errorMessageMsg.style.display = "none";
    };

    if (
      validFirstname(first) == false ||
      validLastName(last) == false ||
      validEmail(email) == "" ||
      validMessage(message) == false
    ) {
      console.log("false");

      modal.style.display = "flex";
      e.preventDefault();
      errorMessage();
    } else if (
      validFirstname(first) == true ||
      validLastName(last) == true ||
      validEmail == !"" ||
      validMessage(message) == true
    ) {
      // console.log("true");

      modal.style.display = "none";
      errorMessageStop();
      e.preventDefault();
    }

    return submitFormular;
  }

  function displayModal(e) {
    modal.style.display = "block";
    e.preventDefault();
    return displayModal;
  }

  function closeModal(e) {
    modal.style.display = "none";
    e.preventDefault();
    return closeModal;
  }
}
