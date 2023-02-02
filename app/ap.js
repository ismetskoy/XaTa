$('.openmodal').click(function (e) {
  e.preventDefault();
  $('.modal').addClass('opened');
});
$('.closemodal').click(function (e) {
  e.preventDefault();
  $('.modal').removeClass('opened');
});