var button = document.getElementById("mobile-burger"); // Assumes element with id='button'
const mobileMenu = document.getElementById("mobile-menu");
button.addEventListener("click", mobileToggler);

function mobileToggler() {
  mobileMenu.classList.toggle("menu-mb_class");
}
