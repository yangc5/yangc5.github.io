'use strict';

$(function() {
  $('.header').load("../header.html");

  $('form').on('submit', function(event){
    event.preventDefault();
    var item = $(this).find('input[type="text"]').val();
    if(item!==''){
      var todo='<li>'+item+'</li>';
      $("#todo-list").append(todo);
      $(this).find('input[type="text"]').val('');
    }


  });


});
