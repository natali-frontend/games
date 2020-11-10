const burger = document.getElementsByClassName("burger")[0];
burger.addEventListener("click", function () {
    this.classList.toggle("active")
});

const buttonGrid = document.getElementsByClassName("grid-js")[0];
const buttonList = document.getElementsByClassName("list-js")[0];
const list = document.getElementsByClassName("games-list");

buttonGrid.addEventListener("click", function () {
    buttonList.classList.remove("active");
    this.classList.add('active');
    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("grid")
    }
});
buttonList.addEventListener("click", function () {
    buttonGrid.classList.remove("active");
    this.classList.add('active');
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("grid");
    }
});


