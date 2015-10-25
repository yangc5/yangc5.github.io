'use strict';

$(document).ready(function(){
  $('.header').load("header.html");

  //Todo: make the following code working!!!
  $('.external_link').on("click", function(){
    console.log("This link is for an external site. Want to proceed?");
  });
});//end document.ready
