document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("email-popup").style.display = "block";
  }, 5000);

  document.querySelector(".close-popup").addEventListener("click", function () {
    document.getElementById("email-popup").style.display = "none";
    document.getElementById("popup-teaser").style.display = "block";
  });

  document
    .getElementById("popup-teaser")
    .addEventListener("click", function () {
      document.getElementById("email-popup").style.display = "block";
      document.getElementById("popup-teaser").style.display = "none";
    });
});
