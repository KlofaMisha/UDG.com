 // hamburger
 $('.hamburger').on('click', function() {
      $(this).toggleClass('hamb_active');
      $(".section_header").toggleClass('headerColor');
    });
 $(".hamburger").on("click",function(e){
 e.preventDefault();
 var navDiv=$('.nav_main').find(".navDiv");
 if(navDiv.is(":visible")){
  navDiv.hide();
  $(".header").removeClass('navColor');
 } else {
 	navDiv.show();
 	$(".header").addClass('navColor');
 }
});



// searchInput
$(".search").on("click",function(e){
 e.preventDefault();
 var search=$('.nav_main').find(".searchInput");
 if(search.is(":visible")){
  search.hide();
 } else {
 	search.show();
 }
});


$('.searchClose').on('click', function() {
      $(".searchInput").hide();
    });



// our projekt
 $(".portfolio").on("mouseover",'.photo_projekt', function (){
 $(this).find(".projekt_P").show();
});

$(".portfolio").on("mouseout",'.photo_projekt', function (){
 $(this).find(".projekt_P").hide();
});



// NEWS 
$(".sektion_news").on("mouseover",'.article_news', function (){
 $(this).addClass('article');
 });
$(".sektion_news").on("mouseout",'.article_news', function (){
 $(this).removeClass('article');

});




// form

(function($) {
  $.fn.phAnim = function( options ) {

    var settings = $.extend({}, options),
    		label,
  			ph;
    
    function getLabel(input) {
      return $(input).parent().find('label');
    }
    
    function makeid() {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
    
    return this.each( function() {
			
      if( $(this).attr('id') == undefined ) {
        $(this).attr('id', makeid());
      }

      if( getLabel($(this)).length == 0 ) {
        if( $(this).attr('placeholder') != undefined ) {
          ph = $(this).attr('placeholder');
          $(this).attr('placeholder', '');
          $(this).parent().prepend('<label for='+ $(this).attr('id') +'>'+ ph +'</label>');
        }
      } else {
        $(this).attr('placeholder', '');
        if(getLabel($(this)).attr('for') == undefined ) {
          getLabel($(this)).attr('for', $(this).attr('id'));
        }
      }
      $(this).on('focus', function() {
        label = getLabel($(this));
        label.addClass('active focusIn');
      }).on('focusout', function() {
        if( $(this).val() == '' ) {
          label.removeClass('active');
        }
        label.removeClass('focusIn');
      });
    });
  };
}(jQuery));

$(document).ready(function() {
	$('.form-control').phAnim();
});




// $(".lang").click(function () {
// $(".navDiv").css({'display' : 'flex'});
// });




$(".lang").click(function(){
 // e.preventDefault();
 var search=$('.nav_main').find(".navDiv");
 if(search.is(":visible")){
  $(".navDiv").css({'display' : 'none'});
 } else {
  $(".navDiv").css({'display' : 'flex'});
 }
});