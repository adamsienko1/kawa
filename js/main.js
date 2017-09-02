'use strict';

$(function () {


    $('#open1').click(function () {
        $('#content1').slideDown(1000), $('#content2').slideUp(0),
            $('#content3').slideUp(0);
        $('#open1').click(function () {
            $('#content1').slideUp(1000);
        });
    });

    $('#close1').click(function () {
        $('#content1').slideUp(1000);
    });


    $('#open2').click(function () {
        $('#content2').slideDown(1000),
            $('#content1').slideUp(0),
            $('#content3').slideUp(0);
        $('#open2').click(function () {
            $('#content2').slideUp(1000);
        });
    });

    $('#close2').click(function () {
        $('#content2').slideUp(1000);
    });


    $('#open3').click(function () {
        $('#content3').slideDown(1000),
            $('#content1').slideUp(0),
            $('#content2').slideUp(0);
        $('#open3').click(function () {
            $('#content3').slideUp(1000);
        });
    });

    $('#close3').click(function () {
        $('#content3').slideUp(1000);
    });







});