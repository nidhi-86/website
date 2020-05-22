(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });

})(jQuery);

var slideIndex = 0
function changeGreeting() {
	var texts = document.getElementsByClassName('change-greeting')
	if(slideIndex >= texts.length) slideIndex = 0
	for(var  i = 0; i < texts.length; i++) {
		texts[i].style.display = "none";
	}
	texts[slideIndex++].style.display = "block"
	setTimeout(changeGreeting, 2000)
}

var myIndex = 0;
function carousal() {
	// var i;
	// var x = document.getElementsByClassName("mySlides");
	// for (i = 0; i < x.length; i++) {
	//   x[i].style.display = "none";  
	// }
	// myIndex++;
	// if (myIndex > x.length) {myIndex = 1}    
	// x[myIndex-1].style.display = "block";  
	// setTimeout(carousal, 2000); 
  }