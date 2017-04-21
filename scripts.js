$(function() {
    $("#booker").datepicker();
  });

$('#booker').datepicker({
  onSelect: function() {
    $('.selectorp').show('fade');
    $('#selector').show('fade');
  }
});

$('#chairs').click(function() {
    $(".chairCount").toggle(this.checked);
});

window.sr = ScrollReveal();
sr.reveal('.landing', {duration: 1200});
sr.reveal('.burger', {origin: 'left', distance: '1000px', viewFactor: 1, duration: 1000});
sr.reveal('.listItems', {origin: 'right', distance: '1000px', viewFactor: 1, duration: 2000 }, 200);
sr.reveal('.picColumn', {origin: 'left', distance: '100px', duration: 1000});
sr.reveal('#booker', {duration: 500}, 50);


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
