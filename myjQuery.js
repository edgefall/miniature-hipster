$(document).ready(function(){

$(window).load()

var currentSlideNumber = 0;
var slideWidth = 900;

function calculateSlideWidth() {
	slideWidth = $('#sliderBox .slide').first().outerWidth(true);
}

function moveSlides() {
	$( "#sliderBox" ).stop(true).animate({right: slideWidth * currentSlideNumber });
}

$(window).load(function() {
	calculateSlideWidth();
});

$(window).resize(function() {
	calculateSlideWidth();
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
