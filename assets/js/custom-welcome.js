// assets/js/custom-welcome.js

document.addEventListener("DOMContentLoaded", function() {

  const modal = document.getElementById("welcome-modal");
  const closeButton = document.querySelector(".modal-close-button");

  // Function to show the modal
  function showModal() {
    modal.style.display = "block";
  }

  // Function to hide the modal and set the flag
  function closeModal() {
    modal.style.display = "none";
    // Use localStorage to remember that the user has seen the pop-up
    localStorage.setItem('welcomePopupShown', 'true');
  }

  // Check if the pop-up has been shown before
  if (!localStorage.getItem('welcomePopupShown')) {
    // If not, show it after a short delay (e.g., 1 second)
    setTimeout(showModal, 1000);
  }

  // When the user clicks on <span> (x), close the modal
  if(closeButton) {
    closeButton.onclick = function() {
      closeModal();
    }
  }

  // When the user clicks anywhere outside of the modal content, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      closeModal();
    }
  }
});