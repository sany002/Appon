$(document).ready(function () {
    /* ========================================== 
    scrollTop() >= 300
    Should be equal the the height of the header
    ========================================== */
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.navbar').addClass('sticky-header')
        } else {
            $('.navbar').removeClass('sticky-header')
        }
    })
    // scroll Top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 150) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $("#toTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    new VenoBox({
        selector: ".my-video-links"
    });
});