"use strict";

$(function(){
  $('.header').load("../header.html");

  $.ajax("https://reqres-api.herokuapp.com/api/users", {
    success: function(users){
      users.forEach(function(user){
        $("#people").append('<li><a class="person" data-href="https://reqres-api.herokuapp.com/api/users/'+user['id']+'">'+user['first_name']+' '+user['last_name']+'</a></li>');
      });

      $('.person').click(function(e){
        e.preventDefault();
        $.ajax($(this).attr('data-href'), {
          success: function(user){
            var avatar='<img src='+user['avatar']+ ' alt="avatar">';
            $('#person-details').html(avatar);
          }
        });
      });
    }
  });




});
