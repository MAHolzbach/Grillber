$(function() {
    $("#booker").datepicker();
  });

$('#booker').datepicker({
  onSelect: function() {
    $('#selector').show('fade');
  }
});

$('#chairs').click(function() {
    $(".chairCount").toggle(this.checked);
});

var grillCost = function() {
  var grillExp, hourCount;
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

var calculatorFunc = function(grill, extras) {
  console.log(grill + extras);
};

calculatorFunc(grillBase, finalExtrasCost);

// var calculatorFunc = function() {
//   var grillBase, finalExtrasCost, totalCost;
//   totalCost = grillBase + finalExtrasCost;
//   return {
//     grillCost: function() {
//     var grillExp, hourCount;
//     if(document.querySelector('.grillType').value === 'small') {
//       grillExp = 10;
//     } else if (document.querySelector('.grillType').value === 'medium') {
//       grillExp = 15;
//     } else {
//       grillExp = 20;
//     }
//     hourCount = document.querySelector('.hourNumber').value;
//     grillBase = grillExp * hourCount;
//     return grillBase;
//   },
//     extrasCost: function() {
//     var sodCost, chairCost;
//     if(document.querySelector('.sodBox').checked === true) {
//       sodCost = 5;
//     } else {
//       sodCost = 0;
//     }
//     if(document.querySelector('.chairs').checked === true) {
//       chairCost = document.querySelector('.chairOrder').value * 3;
//     } else {
//       chairCost = 0;
//     }
//     finalExtrasCost = sodCost + chairCost;
//     return finalExtrasCost;
//   }
// };
//
// };


window.sr = ScrollReveal();
sr.reveal('.landing', {duration: 1200});
sr.reveal('.burger', {origin: 'left', distance: '1000px', viewFactor: 1, duration: 1000});
sr.reveal('.listItems', {origin: 'right', distance: '1000px', viewFactor: 1, duration: 2000 }, 200);
sr.reveal('.picColumn', {origin: 'left', distance: '100px', duration: 1000});
sr.reveal('#booker', {duration: 500}, 50);
