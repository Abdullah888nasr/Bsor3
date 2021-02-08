/*global $, console, alert*/
$(function () {
    'use strict';
    $('.carousel').carousel({
        interval : 6000
    });
    
    var coloLi = $('.option-box .color-option ul li');
    coloLi
        .eq(0).css('background-color', '#f22').end()
        .eq(1).css('background-color', '#aae').end()
        .eq(2).css('background-color', '#cc0').end()
        .eq(3).css('background-color', '#0c0').end()
        .eq(4).css('background-color', '#55e');
    coloLi.click(function () {
        $('link[href*="theme"]').attr("href", $(this).attr('data-value'));
    });
    $('.loading-overlay').fadeOut(1000);
    
    /*Scroll button top*/
    
    var scrollUp = $('.scroll-up');
    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollUp.show() : scrollUp.hide();
    });
    scrollUp.click(function () {
        $('html, body').animate({scrollTop:0}, 600);
    });
    $('.navbar ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset() - 100
        }, 1000);
    });
    $('.signin-popup').on('click', function(){
        $('.signin-popup-box').fadeIn('fast');
        $('html').addClass('no-scroll');
    });
    $('.close-popup').on('click', function(){
        $('.signin-popup-box, .signup-popup-box').fadeOut('fast');
        $('html').removeClass('no-scroll');
    });
    $('.signup-popup').on('click', function(){
        $('.signup-popup-box').fadeIn('fast');
        $('html').addClass('no-scroll');
    });
    $('.select-user > span').click(function(){
        $(this).addClass('active-user').siblings().removeClass('active-user');
        if($(this).text()==='Driver'){
            $('.driver').show();
        }else{
            $('.driver').hide();
        }
    });
    $('.control-fileupload input').change(function(){
        $(this).siblings('.name').text($(this).val().replace(/C:\\fakepath\\/i, ''));
    });
    $('[placeholder]').focus(function () {
        $(this).attr('data-text', $(this).attr('placeholder'));
        $(this).attr('placeholder', '');
    }).blur(function () {
        $(this).attr('placeholder', $(this).attr('data-text'));
    });
    $('.cfield .fa-eye').click(function (){
        // We change the type to appear the password
        var pass = $(this).siblings('.password');
        if(pass.attr('type') === 'password'){
            pass.attr('type', 'text');
            $(this).css({
                color: '#333',
                textDecoration: 'none'
            });
        }else{
            pass.attr('type', 'password');
            $(this).css({
                color: '#aaa',
                textDecoration: 'line-through'
            });
        }
    });
});