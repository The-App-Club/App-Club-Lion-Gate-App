import * as $ from 'jquery';

var speed = 0;
var scroll = 0;
var container = $('.carousel-frame');
var container_w = container.width();
var max_scroll = container[0].scrollWidth - container.outerWidth();

container
  .on('mousemove', function (e) {
    var mouse_x = e.pageX - container.offset().left;
    var mouseperc = (100 * mouse_x) / container_w;
    speed = mouseperc - 50;
  })
  .on('mouseleave', function () {
    speed = 0;
  });

function updatescroll() {
  if (speed !== 0) {
    scroll += speed / 5;
    if (scroll < 0) scroll = 0;
    if (scroll > max_scroll) scroll = max_scroll;
    $('.carousel-frame').scrollLeft(scroll);
  }
  $('#speed').html('Speed: ' + speed);
  $('#scroll').html('Scroll: ' + scroll);
  window.requestAnimationFrame(updatescroll);
}
window.requestAnimationFrame(updatescroll);
