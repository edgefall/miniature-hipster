$(document).ready(function(){
    
$( "#rightArrow" ).click(function() {
  $( "#sliderBox" ).animate({right: "+=980px"});
});

$( "#leftArrow" ).click(function() {
  $( "#sliderBox" ).animate({right: "-=980px"});
});

    });
