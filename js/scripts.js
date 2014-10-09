$(document).ready(function(){
  $('#MainLogo').hide();
  $('#musicLayout').hide();
  $('#mediaLayout').hide();
  $('#liveLayout').hide();


  $('#MainLogo').click(function() {
    location.reload();
});

  $("#miniBar")
    .mouseenter(function() {
          $('#musicLayout').removeClass("col-md-11");
          $('#mediaLayout').removeClass("col-md-11");
          $('#liveLayout').removeClass("col-md-11");
      $(this).animate({"width": "16em"}, 100, function(){
          $('#keebzIcon').hide();
          $('#MainLogo').show();
          $('#musicLayout').addClass("col-md-9");
          $('#mediaLayout').addClass("col-md-9");
          $('#liveLayout').addClass("col-md-9");

        });
      })
    .mouseleave(function() {
          $('#MainLogo').hide();
          $('#keebzIcon').show();
      $(this).animate({"width": "5em"}, 100, function(){
          $('#musicLayout').removeClass("col-md-9");
          $('#musicLayout').addClass("col-md-11");
          $('#mediaLayout').removeClass("col-md-9");
          $('#mediaLayout').addClass("col-md-11");
          $('#liveLayout').removeClass("col-md-9");
          $('#liveLayout').addClass("col-md-11");
        });
      });

//music Icon Function
  $('#musicIcon')
    .mouseenter(function() {
      $('#musicBar').css("font-size","40px");
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
      $(this).animate({ "bottom": "+=1000px" }, 500 );
    });
  });

//media Icon Function
  $('#mediaIcon')
    .mouseenter(function() {
      $('#mediaBar').css("font-size","40px");
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
      $(this).animate({ "bottom": "+=1000px" }, 500 );
    });
  });

//live Icon Function
  $('#liveIcon')
    .mouseenter(function() {
      $('#liveBar').css("font-size","40px");
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
      $(this).animate({ "bottom": "+=1000px" }, 500 );
    });
  });
});
