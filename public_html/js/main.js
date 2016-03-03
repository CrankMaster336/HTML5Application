/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* LOAD BOX SLIDER */

var windowheight = $(window).height();

$(document).ready(function(){ 
    $('.browser-content').css('height', windowheight-200);
    $('.bxslider').bxSlider();
});
$(document).ready(function (){    
    var height = windowheight / 2 - 200;
    $('.logo').css('top', height);
    $('.name').css('top', height);
    $('.bx-prev').css('top', height-50);
    $('.bx-next').css('top', height-50); 
    
    $('.content-first').css('height', windowheight);
    $('.content-second').css('height', windowheight);
    $('.content-third').css('height', windowheight);
    
    $('#downArrow').click(function(){
       $("html, body").animate({
           scrollTop: $(document).height() / 3
       }, "ease") 
    });
    $('#downArrow2').click(function(){
       $("html, body").animate({
           scrollTop: $(document).height()
       }, "ease") 
    });
    $('.kontakt').click(function(){
       $("html, body").animate({
           scrollTop: $(document).height()
       }, "ease") 
    });  

    window.setInterval(function(){
      if($(document).scrollTop() >= $(document).height() / 3 && $(document).scrollTop() < $(window).height() * 2){
          $('.nav-first').removeClass("nav--widthBig"); 
          $('.nav-second').addClass("nav--widthBig"); 
          $('.nav-last').removeClass("nav--widthBig"); 
      }
      else if($(document).scrollTop() >= $(window).height() * 2){
          $('.nav-first').removeClass("nav--widthBig"); 
          $('.nav-second').removeClass("nav--widthBig"); 
          $('.nav-last').addClass("nav--widthBig"); 
      }
      else{
          $('.nav-first').addClass("nav--widthBig"); 
          $('.nav-second').removeClass("nav--widthBig"); 
          $('.nav-last').removeClass("nav--widthBig"); 
      }
    }, 50);


});
