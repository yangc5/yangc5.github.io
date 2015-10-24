"use strict";

$(document).ready(function(){
  var $cells=$('[data-cell]');
  var $playerTurn = 'X';

  $cells.click(function(){
    //if gameover or one player won, restart
    for(var i=0; i<$cells.length; i++) {
      console.log($($cells[i]).text());
    }
    console.log('outside the loop'+checkForWin());
    if(!gamestillon() || checkForWin()) {
      console.log(checkForWin());
      restart();
    }

    $(this).html($playerTurn);
    if(gamestillon()){
      if(checkForWin()) {
        console.log('inside winning statement'+checkForWin());
        $('#announce-winner').text('player ' + $playerTurn + ' won!');


      }
    }
    else{
        $('#announce-winner').text('Game Over!');
    }
    $playerTurn = ($playerTurn ==='X') ? 'O' : 'X';
  });

  //if restart button is clicked restart.
  $('button').click(function(){
    restart();
  });

  function checkForWin(){
    return (horizontalWin() || verticalWin() || diagonalWin());
  }

  function horizontalWin(){
    return ($('[data-cell="0"]').text()===$('[data-cell="1"]').text()===$('[data-cell="2"]').text()) ||
           ($('[data-cell="3"]').text()===$('[data-cell="4"]').text()===$('[data-cell="5"]').text()) ||
           ($('[data-cell="6"]').text()===$('[data-cell="7"]').text()===$('[data-cell="8"]').text());
  }

  function verticalWin(){
    return ($('[data-cell="0"]').text()===$('[data-cell="3"]').text()===$('[data-cell="6"]').text()) ||
           ($('[data-cell="1"]').text()===$('[data-cell="4"]').text()===$('[data-cell="7"]').text()) ||
           ($('[data-cell="2"]').text()===$('[data-cell="5"]').text()===$('[data-cell="8"]').text());
  }

  function diagonalWin(){
    return ($('[data-cell="0"]').text()===$('[data-cell="4"]').text()===$('[data-cell="8"]').text()) ||
           ($('[data-cell="2"]').text()===$('[data-cell="4"]').text()===$('[data-cell="6"]').text());
  }

  function gamestillon(){
    var gamestillon=false;
    for(var i=0; i<$cells.length; i++) {
      if($($cells[i]).text()===''){
        gamestillon=true;
      }
    }
    return gamestillon;
  }

  function restart() {
    for(var i=0; i<$cells.length; i++) {
      $($cells[i]).html('');
    }
  }

});
