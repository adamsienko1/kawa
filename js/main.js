'use strict';

$(function () {

    $('#open1').click(function () {
        $('#content1').slideToggle(0),
            $('#content2').slideUp(0),
            $('#content3').slideUp(0);
    });
    $('#close1').click(function () {
        $('#content1').slideUp(0);
    });

    $('#open2').click(function () {
        $('#content2').slideToggle(0),
            $('#content1').slideUp(0),
            $('#content3').slideUp(0);
    });
    $('#close2').click(function () {
        $('#content2').slideUp(0);
    });

    $('#open3').click(function () {
        $('#content3').slideToggle(0),
            $('#content1').slideUp(0),
            $('#content2').slideUp(0);
    });
    $('#close3').click(function () {
        $('#content3').slideUp(0);
    });


    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    $('.nav a').click(function () {
        $('.navbar-collapse').collapse('hide');
    });


});