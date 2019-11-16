$("#aboutBtn").on("click", function(){
    $("html, body").animate({
        scrollTop: $("#aboutScroll").offset().top
    }, 1000);
});

$("#portfolioBtn").on("click", function(){
    $("html, body").animate({
        scrollTop: $("#portfolioScroll").offset().top
    }, 1000);
});

$("#contactBtn").on("click", function(){
    $("html, body").animate({
        scrollTop: $("#contactScroll").offset().top
    }, 1000);
});

$("#topBtn").on("click", function(){
    $("html, body").animate({
        scrollTop: $(".header").offset().top
    }, 1000);
});