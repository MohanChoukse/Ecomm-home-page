 const header = document.querySelector("header");

 window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 0);
 });

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");
//   console.log(navbar);
//   console.log(menuIcon);
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  
    window.addEventListener("scroll", function () {
      navbar.classList.remove("active");
    });
  });
  