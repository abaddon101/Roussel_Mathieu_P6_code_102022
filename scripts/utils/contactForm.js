/* eslint-disable no-unused-vars */
function LaunchModal() {
  const btnContact = document.querySelector(".contactButton");
  const submitButton = document.querySelector(".submitButton");
  const closeBtnModal = document.querySelector(".closeContactModal");
  const first = document.querySelector("#first");
  const last = document.querySelector("#last");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");
  const modal = document.querySelector("#contact_modal");
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  /// get last element to be focused inside modal
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  /// Event
  submitButton.addEventListener("click", submitFormular);
  btnContact.addEventListener("click", displayModal);
  closeBtnModal.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
  /// Trap focus
  document.addEventListener("keydown", (e) => {
    const isTabPressed = e.keyCode === 9 || e.key === "enter";
    if (!isTabPressed) {
      return;
    }
    if (e.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastFocusableElement) {
        firstFocusableElement.focus();
        e.preventDefault();
      }
    }
  });

  function submitFormular(e) {
    const validFirstname = function (first) {
      const firstRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
      const testFirstName = firstRegExp.test(first.value);
      console.log(testFirstName);
      return testFirstName;
    };
    const validLastName = function (last) {
      const lastRegExp = new RegExp("^[a-zA-Z]{2,}$", "i");
      const testLastName = lastRegExp.test(last.value);
      console.log(testLastName);
      return testLastName;
    };
    const validEmail = function (email) {
      const emailRegExp = new RegExp(
        "^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+.[a-z]{2,10}$",
        "i"
      );
      const testEmail = emailRegExp.test(email.value);
      console.log(testEmail);
      return testEmail;
    };
    const validMessage = function (message) {
      const messageRegExp = new RegExp("^[a-zA-Z]{10,}$", "i");
      const testMessageName = messageRegExp.test(message.value);
      console.log(testMessageName);
      return testMessageName;
    };
    const errorMessage = function () {
      const errorMessageFirstName = document.querySelector("#missingFirstName");
      first.style.border = "2px solid red";
      errorMessageFirstName.style.display = "flex";
      const errorMessageLastName = document.querySelector("#missingLastName");
      last.style.border = "2px solid red";
      errorMessageLastName.style.display = "flex";
      const errorMessageEmail = document.querySelector("#missingEmail");
      email.style.border = "2px solid red";
      errorMessageEmail.style.display = "flex";
      const errorMessageMsg = document.querySelector("#missingMessage");
      message.style.border = "2px solid red";
      errorMessageMsg.style.display = "flex";
    };

    const errorMessageStop = function () {
      const errorMessageFirstName = document.querySelector("#missingFirstName");
      first.style.border = "none";
      errorMessageFirstName.style.display = "none";
      const errorMessageLastName = document.querySelector("#missingLastName");
      first.style.border = "none";
      errorMessageLastName.style.display = "none";
      const errorMessageEmail = document.querySelector("#missingEmail");
      first.style.border = "none";
      errorMessageEmail.style.display = "none";
      const errorMessageMsg = document.querySelector("#missingMessage");
      first.style.border = "none";
      errorMessageMsg.style.display = "none";
    };
    if (
      validFirstname(first) === false ||
      validLastName(last) === false ||
      validEmail(email) === "" ||
      validMessage(message) === false
    ) {
      console.log("false");
      modal.style.display = "flex";
      e.preventDefault();
      errorMessage();
    } else if (
      validFirstname(first) === true ||
      validLastName(last) === true ||
      validEmail === !"" ||
      validMessage(message) === true
    ) {
      modal.style.display = "none";
      errorMessageStop();
      e.preventDefault();
    }
    return submitFormular;
  }

  function displayModal(e) {
    modal.style.display = "block";
    first.focus();
    e.preventDefault();
    return displayModal;
  }

  function closeModal(e) {
    modal.style.display = "none";
  }
}
