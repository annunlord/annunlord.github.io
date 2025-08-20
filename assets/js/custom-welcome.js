// assets/js/custom-welcome.js

document.addEventListener("DOMContentLoaded", function() {

  const toast = document.getElementById("welcome-toast");
  const closeButton = document.querySelector(".toast-close-button");

  // Function to show the toast by adding a 'show' class
  function showToast() {
    if (toast) {
      toast.classList.add("show");
    }
  }

  // Function to hide the toast and set the flag
  function closeToast() {
    if (toast) {
      toast.classList.remove("show");
      // Use localStorage to remember that the user has seen the pop-up
      localStorage.setItem('welcomePopupShown', 'true');
    }
  }

  // Check if the pop-up has been shown before
  if (!localStorage.getItem('welcomePopupShown')) {
    // If not, show it after a short delay (e.g., 2 seconds)
    setTimeout(showToast, 2000);
  }

  // When the user clicks on <span> (x), close the toast
  if(closeButton) {
    closeButton.onclick = function() {
      closeToast();
    }
  }
});