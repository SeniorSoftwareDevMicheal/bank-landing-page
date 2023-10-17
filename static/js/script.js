
var hamburger = document.querySelector(".hamburger");
var open = document.querySelector(".open");
var close = document.querySelector(".close");
var icon = document.querySelector(".new i");
hamburger = document.querySelector(".hamburger");

hamburger.onclick = function () {
  navBar = document.querySelector(".nav-links");
  navBar.classList.toggle("active");
  const isOpen = navBar.classList.contains("active");
  icon.classList = isOpen

  ? 'bx bx-x'
  : 'bx bx-menu-alt-right'
}





document.addEventListener("DOMContentLoaded", function () {
  // Get a reference to the "TOP" link
  var topLink = document.querySelector(".top h1 a");

  // Add a click event listener to the link
  topLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    scrollToTop(); // Call the scrollToTop function
  });

  // Function to scroll to the top of the page
  function scrollToTop() {
    var topOfPage = document.getElementById("top-of-page");
    topOfPage.scrollIntoView({ behavior: "smooth" });
  }
});