let right = document.getElementById("rightButton")
let left = document.getElementById("leftButton")
let sliderItems = document.getElementsByClassName("sliderItems")
let sliderItem = document.getElementsByClassName("sliderItem")

let contentWith = 0;
let count = 0;
right.addEventListener("click", function () {
    count++

    if (count == sliderItem.length) {
        contentWith = 0;
        count = 0
    } else {
        contentWith += 1280
    }
    sliderItem[0].style.marginLeft = -contentWith + "px"
})


left.addEventListener("click", function () {
    if (count == 0) {
        contentWith = 1280 * (sliderItem.length - 1);
        count = 2
    } else {
        contentWith -= 1280
        count--
    }
    sliderItem[0].style.marginLeft = -contentWith + "px"
})