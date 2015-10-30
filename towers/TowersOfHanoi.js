'use strict';

$(function(){

  console.log("tower");

  var $blocks = $('[data-block]');
  var $stacks = $('[data-stack]');


  $stacks.click(move());

  //First check if there's a detached block, if no, detach the last-child of the clicked stack;
  //If yes, try dropping.
  function move() {
    console.log("move");
  }


});
