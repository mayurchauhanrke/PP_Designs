let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.addEventListener("click", function (){
    navlist.classlist.toggle("active");
});

window.onscroll = () => {
    navlist.classlist.remove("active");
};