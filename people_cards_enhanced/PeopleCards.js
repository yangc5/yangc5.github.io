"use strict";

$(function(){
  $('.header').load("../header.html");

  $.ajax("https://reqres-api.herokuapp.com/api/users", {
    success: function(users){
      var $peopleList = $('#people');
      var personListArr = [];
      users.forEach(function(user){
        personListArr.push('<li data-id="'+user['id']+'">'+user['first_name']+" "+user['last_name']);
      });
      $peopleList.append(personListArr.join(''));

      $('li').click(function(e){
        e.preventDefault();
        var personLink="https://reqres-api.herokuapp.com/api/users/"+$(this).data('id');
        $.ajax(personLink, {
          success: function(user){
            var avatar = '<img src='+user['avatar']+' alt="avatar">';
            $('#person-details').html(avatar);
          }
        })
      });
    }
  });




});
