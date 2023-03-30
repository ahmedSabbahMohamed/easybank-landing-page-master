let menuIcon = document.querySelector(".menu"),
closeMenu = document.querySelector(".close"),
menu = document.querySelector(".mobile-nav");

menuIcon.addEventListener("click", _ => {
    menuIcon.style.display = "none";
    closeMenu.style.display = "block";
    menu.style.display = "block";
});

closeMenu.addEventListener("click", _ => {
    closeMenu.style.display = "none";
    menuIcon.style.display = "block";
    menu.style.display = "none";
})