$(function() {
    $("#booker").datepicker();
  });

window.sr = ScrollReveal();
sr.reveal('.landing', {duration: 1200});
sr.reveal('.burger', {origin: 'left', distance: '1000px', viewFactor: 1, duration: 1000});
sr.reveal('.listItems', {origin: 'right', distance: '1000px', viewFactor: 1, duration: 2000 }, 200);
sr.reveal('.picColumn', {origin: 'left', distance: '100px', duration: 1000});
sr.reveal('#booker', {duration: 500}, 50);
