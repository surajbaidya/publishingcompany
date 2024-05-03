document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn && navLinks) {
    // Check if both elements are found
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      menuBtn.classList.toggle("cross");
    });
  }
});
