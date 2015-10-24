'use strict';

$(document).ready(function(){
  $('.header').load("header.html");
  $('.intro').click(function(){
    $('.intro').hide();
    $('.main').show();
  });
});//end document.ready
