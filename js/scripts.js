$(document).ready(function(){
  $('#loading').show();
  $('#miniBar').hide();
  $('#MainLogo, #musicLayout, #mediaLayout, #liveLayout, #facebook').hide();
  $('#facebookTab').css('background','rgba(255, 255, 255, .5)');

  $('#MainLogo').click(function() {
    $('#facebook').hide();
    $('.layout').fadeOut(function(){
      $(this).css("bottom","-1000px");
      $('#facebookTab').css('background','rgba(255, 255, 255, .5)');
    });
  });

//after content loads
  $(window).load(function(){
    $('#loading').fadeOut( function(){
        $("#keebzIcon").hide();
        $('#MainLogo').css({"margin-left":"-200px","width":"200px"}).show();
        $('.glyphicon').css({"left":"-300px"});
        $('#miniBar').css({"width":"0em", "left":"-50px"});

        $('#miniBar').show( function(){
          $(this).animate({"width": "16em", "left":"0px"}, 500);
          $('.glyphicon').animate({"left":"0px"},500);
          $('#MainLogo').animate({'margin-left':"0px"},500);
          $('.barText').animate({"left":"100px"},500);
        });
    });
//sidebar Function
    $("#miniBar")
      .mouseenter(function() {
        $('.layout').css("width","90%");
        $(this).animate({"width": "16em"}, 100, function(){
            $('#keebzIcon').hide();
            $('#MainLogo').show();
          });
        })
      .mouseleave(function() {
        $(this).animate({"width": "5em"}, 100, function(){
        $('#MainLogo').hide();
        $('#keebzIcon').show();
        $('.layout').css("width","94%");
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
      $('#liveLayout, #mediaLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
      $('#musicLayout').show(function(){
        $(this).css("bottom","-1000px").animate({ "bottom": "+=1000px" }, 500 );
      });
    });

  //media Icon Function
    $('#mediaIcon')
      .mouseenter(function() {
        $('#mediaBar').css("font-size","40px").animate({"opacity": "1" }, 100);})
      .mouseleave(function() {
        $("#mediaBar").animate({"opacity": "0"}, 100).css("font-size","1px");
    });

    $('#mediaIcon').click(function(){
      $('#liveLayout, #musicLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
      $('#mediaLayout').show(function(){
        $(this).css("bottom","-1000px").animate({ "bottom": "+=1000px" }, 500 );
      });
    });

  //live Icon Function
    $('#liveIcon')
      .mouseenter(function() {
        $('#liveBar').css("font-size","40px").animate({"opacity": "1" }, 100);})
      .mouseleave(function() {
        $("#liveBar").animate({"opacity": "0"}, 100).css("font-size","1px");
    });

    $('#liveIcon').click(function(){
      $('#mediaLayout, #musicLayout').animate({ "bottom": "-1000px" }, 300, function(){$(this).hide();});
      $('#liveLayout').show(function(){
        $(this).css("bottom","-1000px").animate({ "bottom": "+=1000px" }, 500 );
      });
    });

  //Social Tab Function
    $('#facebookTab').click(function(){
      $('#twitterTab').css('background','rgba(255, 255, 255, .5)');
      $(this).css('background','rgba(255, 255, 255, .8)');
      $('#twitter').hide();
      $('#facebook').show();
    });

    $('#twitterTab').click(function(){
      $('#facebookTab').css('background','rgba(255, 255, 255, .5)');
      $(this).css('background','rgba(255, 255, 255, .8)');
      $('#facebook').hide();
      $('#twitter').show();
    });
  });
});
