$(document).ready(function () {
    // function clock() {
    //     var date = new Date(),
    //         day = date.getDate(),
    //         month = date.getMonth(),
    //         monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    //         year = date.getFullYear(),
    //         hour = date.getHours(),
    //         min = date.getMinutes();
    //     if (day < 10) day = "0" + day;
    //     if (hour < 10) hour = "0" + hour;
    //     if (min < 10) min = "0" + min;
    //     document.getElementById("date").innerHTML = day + " " + monthArr[month] + " " + year;
    //     document.getElementById("time").innerHTML = hour + ":" + min;
    // }
    //
    // var timer;
    //
    // function clockStart() {
    //     timer = setInterval(clock, 1000);
    //     clock();
    // }
    //
    // clockStart();
    var slider = $('.slides');
    slider.owlCarousel({
        items: 4,
        margin: 20,
        dots: false,
        nav: true,
        navText: ["<", ">"],
        loop: true,
        autoplay: false
    });
    $('select').selectric();
    $('rangeSum').ionRangeSlider({
        grid: true,
        min: 50,
        max: 70000,
        from: 500,
        step: 100,
        grid_num: 16,
        grid_margin: false,
        postfix: "$",
    });
})