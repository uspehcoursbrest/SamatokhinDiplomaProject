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
        navText: ["<span class = 'icon-leftLight'></span>",
            "<span class = 'icon-rightLight'></span>"],
        loop: true,
        autoplay: false
    });
    $('select').selectric();
    $('#rangeSum').ionRangeSlider({
        grid: true,
        min: 20,
        max: 70000,
        from: 20000,
        step: 100,
        grid_num: 250,
        grid_margin: false,
        postfix: "$",
        onStart: function (data) {
            $('#sumInv').val(data.from);
        },
        onChange: function (data) {
            $('#sumInv').val(data.from);
        }
    });
    var sumRange = $('#rangeSum').data('ionRangeSlider'),
        min = 50,
        max = 50000;
    $('#sumInv').on('change keyup', function () {
        var val = $(this).prop('value');
        if (val < min) {
            val = min;
        } else if (val > max) {
            val = max;
        }
        sumRange.update({
            from: val
        });
    });
})