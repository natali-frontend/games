const burger = document.getElementsByClassName("burger")[0];
const menu = document.getElementsByClassName("header-menu")[0];
burger.addEventListener("click", function () {
    this.classList.toggle("active");
    menu.classList.toggle("mobile-menu")
});

const buttonGrid = document.getElementsByClassName("grid-js")[0];
const buttonList = document.getElementsByClassName("list-js")[0];
const list = document.getElementsByClassName("games-list");

if (buttonGrid) {
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
}


const sidebarMenu = document.getElementsByClassName("submenu");
for (let i = 0; i < sidebarMenu.length; i++) {
    sidebarMenu[i].addEventListener("click", function () {
        this.classList.toggle("show");
    });
}

const megaMenuButton = document.getElementsByClassName("btn");
const megaMenu = document.getElementsByClassName("mega-menu")[0];
const showMegaMenu = () => {
    if (window.innerWidth < 992) {
        for (let i = 0; i < megaMenuButton.length; i++) {
            megaMenuButton[i].addEventListener("click", function () {
                this.classList.toggle("visible");
            });
        }
    } else {
        for (let i = 0; i < megaMenuButton.length; i++) {
            megaMenuButton[i].addEventListener('mouseleave', function () {
                megaMenu.style.animation = 'hideMegaMenu 1s ease-in-out'
            })
        }
        for (let i = 0; i < megaMenuButton.length; i++) {
            megaMenuButton[i].addEventListener('mousemove', function () {
                megaMenu.style.animation = 'showMegaMenu 0.4s ease-in-out forwards'
            })
        }

    }
};
showMegaMenu();
window.addEventListener('resize', function () {
    showMegaMenu()
});


var check_status = false;

$(".heart .like-cnt").click(function () {
    var t1 = new TimelineLite();
    var t2 = new TimelineLite();
    if (!check_status) {
        t1.set(this, {scale: 0});
        t1.set(this, {scale: 0});
        t1.to(this, 0.6, {scale: 1, opacity: 1, ease: Expo.easeOut});
        t2.to(this, 0.65, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, '+=0.2');
        check_status = true;
        var burst = new mojs.Burst({
            parent: $(this).parent(),
            radius: {10: 30},
            count: 15,
            angle: {0: 30},
            children: {
                delay: 250,
                duration: 700,
                radius: {10: 0},
                opacity: 1,
                easing: mojs.easing.bezier(.08, .69, .39, .97)
            }
        });
        burst.replay()
    } else {
        t1.to(this, 1, {scale: 1})
            .to(this, 1, {scale: 1, opacity: 1, ease: Power4.easeOut});
        t1.timeScale(7);
        check_status = false;
    }

});

$(".like-js .like-cnt").click(function () {
    var t1 = new TimelineLite();
    var t2 = new TimelineLite();
    if (!check_status) {
        t1.set(this, {scale: 0});
        t1.set(this, {scale: 0});
        t1.to(this, 0.6, {scale: 1, background: 'rgba(0, 22, 255, 1)', ease: Expo.easeOut});
        t2.to(this, 0.65, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, '+=0.2');
        check_status = true;
        var burst = new mojs.Burst({
            parent: $(this).parent(),
            radius: {10: 30},
            count: 15,
            angle: {0: 30},
            children: {
                delay: 250,
                duration: 700,
                radius: {10: 0},
                fill: ['rgba(0, 22, 255, 1)'],
                easing: mojs.easing.bezier(.08, .69, .39, .97)
            }
        });
        burst.replay()
    } else {
        t1.to(this, 1, {scale: 1})
            .to(this, 1, {scale: 1, background: '#23d2e2', ease: Power4.easeOut});
        t1.timeScale(7);
        check_status = false;
    }

});

$(".chain-js .like-cnt").click(function () {
    var t1 = new TimelineLite();
    var t2 = new TimelineLite();
    if (!check_status) {
        t1.set(this, {scale: 0});
        t1.set(this, {scale: 0});
        t1.to(this, 0.6, {scale: 1, opacity: 1, background: '#fa6342', ease: Expo.easeOut});
        t2.to(this, 0.65, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, '+=0.2');
        check_status = true;
        var burst = new mojs.Burst({
            parent: $(this).parent(),
            radius: {15: 35},
            count: 15,
            angle: {0: 30},
            children: {
                delay: 250,
                duration: 700,
                radius: {10: 0},
                fill: ['#fa6342'],
                easing: mojs.easing.bezier(.08, .69, .39, .97)
            }
        });
        burst.replay()
    } else {
        t1.to(this, 1, {scale: 1})
            .to(this, 1, {scale: 1, opacity: 1, ease: Power4.easeOut});
        t1.timeScale(7);
        check_status = false;
    }
});

$(".dislike .like-cnt").click(function () {
    var t1 = new TimelineLite();
    var t2 = new TimelineLite();
    if (!check_status) {
        t1.set(this, {scale: 0});
        t1.set(this, {scale: 0});
        t1.to(this, 0.6, {scale: 1, opacity: 1, background: '#ff3636', ease: Expo.easeOut});
        t2.to(this, 0.65, {scale: 1, ease: Elastic.easeOut.config(1, 0.3)}, '+=0.2');
        check_status = true;
        var burst = new mojs.Burst({
            parent: $(this).parent(),
            radius: {15: 35},
            count: 15,
            angle: {0: 30},
            children: {
                delay: 250,
                duration: 700,
                radius: {10: 0},
                fill: ['#ff3636'],
                easing: mojs.easing.bezier(.08, .69, .39, .97)
            }
        });
        burst.replay()
    } else {
        t1.to(this, 1, {scale: 1})
            .to(this, 1, {scale: 1, opacity: 1, ease: Power4.easeOut});
        t1.timeScale(7);
        check_status = false;
    }

});

// Go to Top Button
const toTop = document.getElementById('toTop');
const showToTop = () => {
    if (window.scrollY > 500) {
        toTop.style.display = 'block';
    } else {
        toTop.style.display = 'none';
    }
};
showToTop();
document.addEventListener('scroll', function () {
    showToTop();
});






