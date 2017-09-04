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

});