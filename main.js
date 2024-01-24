let bar = document.querySelector(".fa-bars-staggered");
let sidebar = document.querySelector("#sidebar");
bar.addEventListener("click", function () {
  sidebar.style.left = "0%";
});

let sidebarCloseBtn = document.querySelector(".fa-xmark");
sidebarCloseBtn.addEventListener("click", function () {
  sidebar.style.left = "-100%";
});
