$(document).ready(function(){
  $('#musicLayout').hide();

  $("#miniBar")
    .mouseenter(function() {
      $(this).animate({"width": "10em"}, 100);})
    .mouseleave(function() {
      $(this).animate({"width": "3em"}, 100);
  });

//music Icon Function
  $('#musicIcon')
    .mouseenter(function() {
      $('#musicBar').css("font-size","20px");
      $('#musicBar').animate({"opacity": "1" }, 100);})
    .mouseleave(function() {
      $("#musicBar").animate({"opacity": "0"}, 100);
      $('#musicBar').css("font-size","1px");
  });

  $('#musicIcon').click(function(){
    $('#liveLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
    $('#mediaLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
    $('#musicLayout').show(function(){
      $(this).css("bottom","-1000px")
      $(this).animate({ "bottom": "+=1000px" }, 300 );
    });
  });

//media Icon Function
  $('#mediaIcon')
    .mouseenter(function() {
      $('#mediaBar').css("font-size","20px");
      $('#mediaBar').animate({"opacity": "1" }, 100);})
    .mouseleave(function() {
      $("#mediaBar").animate({"opacity": "0"}, 100);
      $('#mediaBar').css("font-size","1px");
  });

  $('#mediaIcon').click(function(){
    $('#liveLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
    $('#musicLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
    $('#mediaLayout').show(function(){
      $(this).css("bottom","-1000px")
      $(this).animate({ "bottom": "+=1000px" }, 300 );
    });
  });

//live Icon Function
  $('#liveIcon')
    .mouseenter(function() {
      $('#liveBar').css("font-size","20px");
      $('#liveBar').animate({"opacity": "1" }, 100);})
    .mouseleave(function() {
      $("#liveBar").animate({"opacity": "0"}, 100);
      $('#liveBar').css("font-size","1px");
  });

  $('#liveIcon').click(function(){
    $('#mediaLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
    $('#musicLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
    $('#liveLayout').show(function(){
      $(this).css("bottom","-1000px")
      $(this).animate({ "bottom": "+=1000px" }, 300 );
    });
  });
});
