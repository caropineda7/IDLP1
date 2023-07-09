var x = 0;

document.getElementById('prev').onclick = function () {
    const widthItem = document.querySelector('.item-slider').offsetWidth;
    document.getElementById('formList-slider').scrollLeft -= widthItem;
    x--;
}

document.getElementById('mid').onclick = function () {
    if (x > 0) {
        const widthItem = document.querySelector('.item-slider').offsetWidth;
        document.getElementById('formList-slider').scrollLeft -= widthItem;
        x--;
        return;
    }
    if (x <= 0) {
        const widthItem = document.querySelector('.item-slider').offsetWidth;
        document.getElementById('formList-slider').scrollLeft += widthItem;
        x++;
        return;
    }

}

document.getElementById('next').onclick = function () {
    const widthItem = document.querySelector('.item-slider').offsetWidth;
    document.getElementById('formList-slider').scrollLeft += widthItem;
    x++;
}