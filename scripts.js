//Timepicker
$(document).ready(function(){
  $('#timepicker').timepicker({
  timeFormat: 'h:mm p',
  interval: 30,
  minTime: '8:00',
  maxTime: '23:00',
  defaultTime: '11',
  startTime: '08:00',
  dynamic: false,
  dropdown: true,
  scrollbar: true
  });
});
//

//Datepicker
$(function() {
    $("#booker").datepicker();
  });

$('#booker').datepicker({
  onSelect: function() {
    $('#shifter').hide(300, function() {
      $('.selectorp').show('fade');
      $('#selector').show('fade');
    });
  }
});
//

//Add chair dropdown
$('#chairs').click(function() {
    $(".chairCount").toggle(this.checked);
});
//

//Scroll reveal
window.sr = ScrollReveal();
sr.reveal('.landing', {duration: 1200, origin: 'right'});
sr.reveal('.burger', {origin: 'left', distance: '100px', viewFactor: 1, duration: 1000});
sr.reveal('.listItems', {origin: 'right', distance: '100px', viewFactor: 1, duration: 1000 });
sr.reveal('.picColumn', {origin: 'left', distance: '100px', duration: 1000});
sr.reveal('.descColumn', {origin: 'right', distance: '100px', duration: 1000});
sr.reveal('#booker', {duration: 500, viewFactor: 0.5});
sr.reveal('.sod', {origin: 'left', distance: '300px', duration: 1000});
sr.reveal('.chair', {origin: 'right', distance: '300px', duration: 1000});
//

//Link scroll on click
$("a[href^='#']").on("click", function(event){
  event.preventDefault();
  $("html, body").animate({
      scrollTop: $( $.attr(this, "href") ).offset().top
  }, 500);
});
//

//Price logic
var grillCost = function() {
  var grillExp, hourCount, grillBase;
  if(document.querySelector('.grillType').value === 'small') {
    grillExp = 10;
  } else if (document.querySelector('.grillType').value === 'medium') {
    grillExp = 15;
  } else {
    grillExp = 20;
  }
  hourCount = document.querySelector('.hourNumber').value;
  grillBase = grillExp * hourCount;
  return grillBase;
};

var extrasCost = function() {
  var sodCost, chairCost, finalExtrasCost;
  if(document.querySelector('.sodBox').checked === true) {
    sodCost = 5;
  } else {
    sodCost = 0;
  }
  if(document.querySelector('.chairs').checked === true) {
    chairCost = document.querySelector('.chairOrder').value * 3;
  } else {
    chairCost = 0;
  }
  finalExtrasCost = sodCost + chairCost;
  return finalExtrasCost;
};

calculatorFunc = function(grill, extras) {
  return grill + extras;
};

$('#selector').change(function() {
  var displayPrice;
  displayPrice = calculatorFunc(grillCost(), extrasCost());
  document.getElementById('finalTotal').value = displayPrice;
});
//
