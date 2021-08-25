(function(){
    const slide = document.querySelector(".slideshow");
    const item = document.querySelectorAll(".item-show");
    const size = item[0].clientWidth;

    const btnNext = document.querySelector(".btnNext");
    const btnPrev = document.querySelector(".btnPrev");

    let count = 1;
    let auto = setInterval(autoShow, 6000);

    slide.style.transform =
        "translateX(" + -size * count + "px)";

    btnNext.addEventListener("click", () => {
        if (count >= item.length - 1) return;
        slide.style.transition = `transform 1s ease-in-out`;
        count++;
        slide.style.transform = `translateX(${
            -size * count
        }px)`;
        clearInterval(auto);
        auto = setInterval(autoShow, 6000);
    });

    btnPrev.addEventListener("click", () => {
        if (count <= 0) return;
        slide.style.transition = `transform 1s ease-in-out`;
        count--;
        slide.style.transform = `translateX(${
            -size * count
        }px)`;
        clearInterval(auto);
        auto = setInterval(autoShow, 6000);
    });

    slide.addEventListener("transitionend", () => {
        if (item[count].id == "first") {
            slide.style.transition = "none";
            count = item.length - 2;
            slide.style.transform = `translateX(${
                -size * count
            }px)`;
        }
        if (item[count].id == "end") {
            slide.style.transition = "none";
            count = item.length - count;
            slide.style.transform = `translateX(${
                -size * count
            }px)`;
        }
    });

    function autoShow() {
        if (count >= item.length - 1) return;
        slide.style.transition = `transform 1s ease-in-out`;
        count++;
        slide.style.transform = `translateX(${
            -size * count
        }px)`;
    }
})();