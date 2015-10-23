"use strict";

$(document).ready(function(){
  var $cells=$('[data-cell]');
  var $playerTurn = 'X';


  $cells.click(function(){
    $(this).html($playerTurn);
    console.log(checkForWin());
    console.log(gamestillon());
    if(gamestillon()){
      if(checkForWin()) {
        $('#announce-winner').text('player ' + $playerTurn + ' won!');
      }
    }
    else{
        $('#announce-winner').text('Game Over!');
    }
    $playerTurn = ($playerTurn ==='X') ? 'O' : 'X';
  });

  function checkForWin(){
    return (horizontalWin() || verticalWin() || diagonalWin());
  }

  function horizontalWin(){
    return ($('[data-cell="0"]').text()===$playerTurn && $('[data-cell="1"]').text()===$playerTurn && $('[data-cell="2"]').text()===$playerTurn) ||
           ($('[data-cell="3"]').text()===$playerTurn && $('[data-cell="4"]').text()===$playerTurn && $('[data-cell="5"]').text()===$playerTurn) ||
           ($('[data-cell="6"]').text()===$playerTurn && $('[data-cell="7"]').text()===$playerTurn && $('[data-cell="8"]').text()===$playerTurn);
  }

  function verticalWin(){
    return ($('[data-cell="0"]').text()===$playerTurn && $('[data-cell="3"]').text()===$playerTurn && $('[data-cell="6"]').text()===$playerTurn) ||
           ($('[data-cell="1"]').text()===$playerTurn && $('[data-cell="4"]').text()===$playerTurn && $('[data-cell="7"]').text()===$playerTurn) ||
           ($('[data-cell="2"]').text()===$playerTurn && $('[data-cell="5"]').text()===$playerTurn && $('[data-cell="8"]').text()===$playerTurn);
  }

  function diagonalWin(){
    return ($('[data-cell="0"]').text()===$playerTurn && $('[data-cell="4"]').text()===$playerTurn && $('[data-cell="8"]').text()===$playerTurn) ||
           ($('[data-cell="2"]').text()===$playerTurn && $('[data-cell="4"]').text()===$playerTurn && $('[data-cell="6"]').text()===$playerTurn);
  }

  function gamestillon(){
    var gamestillon=false;
    for(var i=0; i<$cells.length; i++) {
      console.log($cells[i]);
      if($($cells[i]).text()===''){
        gamestillon=true;
      }
    }
    return gamestillon;
  }

});
