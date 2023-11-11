window.addEventListener("copy", (e) => {
  alert("Site Is Protected");
  e.preventDefault();
  window.navigator.clipboard.writeText(null);
});

window.addEventListener("contextmenu", (e) => {
  alert("Site Is Protected");
  e.preventDefault();
});
window.addEventListener("select", (e) => {
  e.preventDefault();
});
