$(document).ready(function () {

    $(".menu").click(function () {
        $(".navigation").toggle();
    });
    $("#profile").click(function () {
        $(".submenu").toggle();
    });

    $("#industrial-btn").click(function () {
        $("#industrial-nfo").show();
        $("#challenges-nfo").hide();

    });
    $("#industrial-x").click(function () {
        $("#industrial-nfo").hide();
    });

    $("#challenges-btn").click(function () {
        $("#challenges-nfo").show();
    });
    $("#challenges-x").click(function () {
        $("#challenges-nfo").hide();
    });

});