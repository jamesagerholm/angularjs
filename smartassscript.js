

$(document).ready(function(){

$(".list").hide('slow');

$("p, h2, li").mouseover(function(){
    $(this).css("color","white");
});  


$("p, h2, li").mouseout(function(){
    $(this).css("color","black");
});

$(".listbutton").click(function(){
    $(".list").slideToggle("350");
});
$('#btn').on('click', function() {
  $('#msg').append(' World');
});

// jQuery
$('#btn').on('click', function() {
  $('#msg').append(' World');
});


});




