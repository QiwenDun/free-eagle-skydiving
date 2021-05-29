jQuery("gotomore").click(function () {
    jQuery("section1,html").animate({
        scrollTop: 0
    }, 600);
});
jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 150) {
        jQuery("#gotomore").addClass("visible");
    } else {
        jQuery("#gotomore").removeClass("visible");
    }
});