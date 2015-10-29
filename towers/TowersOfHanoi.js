'use strict';

$(function(){



  function compareBlock(fromStack, toStack){
    if($('fromStack:last-child').attr('data-block')<$('toStack:last-child').attr('data-block') || $('toStack').children().length===0) {
      return true;
    }
    else {
      return false;
    }
  }

  function moveBlock(fromStack, toStack) {
    if(compareBlock(fromStack, toStack)) {
      var block = $('fromStack:last-child').detach();
      toStack.append(block);
    }
    else {
      console.log("can't make this move");
    }
  }

  function checkWin() {
    if ($('[data-stack="1"]').children().length===0&&$('[data-stack="2"]').children().length===0){
      console.log("You won!");
      return true;
    }
  }






});
