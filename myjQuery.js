$(document).ready(function(){

var currentSlideNumber = 0;
var slideWidth = 900; 

function moveSlides() {
	$( "#sliderBox" ).stop(true).animate({right: slideWidth * currentSlideNumber });
}

$(window).resize(function() {
	slideWidth = $('#sliderBox .slide').first().outerWidth(true);
	moveSlides();
});

$( "#rightArrow" ).click(function() {
	currentSlideNumber++;
	moveSlides();
});

$( "#leftArrow" ).click(function() {
	currentSlideNumber--;
	moveSlides();
});

});
