const burger = document.getElementsByClassName("burger")[0];
const menu = document.getElementsByClassName("menu-content")[0];
burger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("mobile-menu")
});

const buttonGrid = document.getElementsByClassName("grid-js")[0];
const buttonList = document.getElementsByClassName("list-js")[0];
const list = document.getElementsByClassName("games-list");

buttonGrid.addEventListener("click", function () {
    buttonList.classList.remove("active");
    this.classList.add('active');
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("list");
    }
});
buttonList.addEventListener("click", function () {
    buttonGrid.classList.remove("active");
    this.classList.add('active');
    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("list")
    }
});

const sidebarMenu = document.getElementsByClassName("submenu");
for (let i = 0; i < sidebarMenu.length; i++) {
    sidebarMenu[i].addEventListener("click", function () {
        this.classList.toggle("show");
    });
}

const megaMenu = document.getElementsByClassName("menu-item");
if (window.innerWidth < 992) {
    for (let i = 0; i < megaMenu.length; i++) {
        megaMenu[i].addEventListener("click", function () {
            console.log(1);
            this.classList.toggle("visible");
        });
    }
}


