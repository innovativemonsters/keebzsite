$(document).ready(function(){

  $("#miniBar")
    .mouseenter(function() {
      $(this).animate({"width": "10em"}, 100);})
    .mouseleave(function() {
      $(this).animate({"width": "3em"}, 100);
  });

  $('#musicIcon')
    .mouseenter(function() {
      $('#musicBar').css("font-size","20px");
      $('#musicBar').animate({"opacity": "1" }, 100);})
    .mouseleave(function() {
      $("#musicBar").animate({"opacity": "0"}, 100);
      $('#musicBar').css("font-size","1px");
  });

  $('#mediaIcon')
    .mouseenter(function() {
      $('#mediaBar').css("font-size","20px");
      $('#mediaBar').animate({"opacity": "1" }, 100);})
    .mouseleave(function() {
      $("#mediaBar").animate({"opacity": "0"}, 100);
      $('#mediaBar').css("font-size","1px");
  });

  $('#liveIcon')
    .mouseenter(function() {
      $('#liveBar').css("font-size","20px");
      $('#liveBar').animate({"opacity": "1" }, 100);})
    .mouseleave(function() {
      $("#liveBar").animate({"opacity": "0"}, 100);
      $('#liveBar').css("font-size","1px");
  });
});
