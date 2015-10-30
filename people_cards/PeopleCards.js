"use strict";

$(function(){
  $.ajax("https://reqres-api.herokuapp.com/api/users", {
    success: function(response){
      console.log(response[0]);
    }
  });
});
