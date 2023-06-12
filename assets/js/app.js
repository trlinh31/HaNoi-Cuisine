$(document).ready(function(){
    $('.reviews-content').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '.box-reviews .arrow-prev',
        nextArrow: '.box-reviews .arrow-next'
    }),
    $('.posts').slick({
        prevArrow: '.box-posts .arrow-prev',
        nextArrow: '.box-posts .arrow-next'
    });
});