document.querySelector(".ccc-btn").addEventListener("click", function () {
  document.querySelector(".frame-box").style.display = "block";
  document.querySelector(".popup-container").classList.add("active");
});

document
  .getElementById("closePopupButton")
  .addEventListener("click", function () {
    document.querySelector(".frame-box").style.display = "none";
    window.location.reload();
    document.querySelector(".popup-container").classList.remove("active");
  });
