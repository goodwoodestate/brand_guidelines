var button = document.getElementById("mobile-burger"); // Assumes element with id='button'
const mobileMenu = document.getElementById("mobile-menu");
button.addEventListener("click", mobileToggler);

function mobileToggler() {
  mobileMenu.classList.toggle("menu-mb_class");
}

document.addEventListener("DOMContentLoaded", function() {
  var buildDateElement = document.getElementById("buildDate");
  var buildDate = new Date(document.lastModified);
  var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  buildDateElement.textContent = "Last Updated: " + buildDate.toLocaleString(undefined, options);
});