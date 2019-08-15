document.addEventListener("DOMContentLoaded", function () {
    var listElements = document.querySelectorAll(".header__menu__item");
    
    for (var i=0; i<listElements.length; i++) {
        
        listElements[i].addEventListener("mouseover", function () {
            var insideListElements = this.querySelector("#dropdown");
            var dropdownElements = this.querySelectorAll(".dropdown__item");
            var triangle = this.querySelector(".triangle");
            if (insideListElements !== null) {
                insideListElements.style.display = "block";
                triangle.style.display = "block";
                for (var i=0; i<dropdownElements.length; i++) {
                    dropdownElements[i].style.display = "block";
                }
            }
        });
        
        listElements[i].addEventListener("mouseout", function () {
            var insideListElements = this.querySelector("#dropdown");
            if (insideListElements !== null) {
                insideListElements.style.display = "none";
            } //nie mam pojecia czemu to dziala bez kodu tutaj
        });
    }

    var pictureLeft = document.querySelector(".picture_left");
    var spanClare = pictureLeft.querySelector("span");
    var pictureRight = document.querySelector(".picture_right");
    var spanMargarita = pictureRight.querySelector("span");
    console.log(spanClare, spanMargarita);

    pictureLeft.addEventListener("mouseover", function () {
        spanClare.style.display = "none";
    });

    pictureLeft.addEventListener("mouseout", function () {
        spanClare.style.display = "block";
    });

    pictureRight.addEventListener("mouseover", function () {
        spanMargarita.style.display = "none";
    });

    pictureRight.addEventListener("mouseout", function () {
        spanMargarita.style.display = "block";
    });

    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var section1 = document.querySelector(".section1");
    var sliderElements = section1.querySelectorAll("li");
    var index = 0;

    for (var i=0; i<sliderElements.length; i++) {
        sliderElements[index].classList.add("visible");
    }

    prev.addEventListener("click", function () {
        sliderElements[index].classList.remove("visible");
        index -= 1;
        if (index < 0) {
            index = sliderElements.length - 1;
        }
        sliderElements[index].classList.add("visible");
    });

    next.addEventListener("click", function () {
        sliderElements[index].classList.remove("visible");
        index += 1;
        if (index >= listElements.length - 1) {
            index = 0;
        }
        sliderElements[index].classList.add("visible");
    });
});


