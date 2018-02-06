(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

			  $(".header-area").sticky({topSpacing:0});
        
        
     $('.navbar-nav li a[href^="#"]').on('click', function (e) {
					e.preventDefault();
         
    $('ul.navbar-nav li').removeClass('active');
    $(this).parent('li').addClass('active');


					var target = this.hash;
					var $target = $(target);
                    var headerH = "70";

					$('html, body').animate({
						'scrollTop': $target.offset().top -headerH + "px"
					}, 1000, 'swing');
				});
        

        

$(".navbar-dark .navbar-nav .nav-link").click(function(){
            $(".navbar-collapse").removeClass("show");
        });
        
        



    });

}(jQuery));




//Added this Script for changing the menu link

// Cache selectors
var topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;

   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .parent().removeClass("active")
     .end().filter("[href='#"+id+"']").parent().addClass("active");
});