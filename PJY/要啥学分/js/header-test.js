
// WEBPACK FOOTER //
// ./assets/js/_header.js
var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {  
  var el=document.getElementById('nav');
  el.style.display="block";
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.pageYOffset;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      if(last_known_scroll_position==200)
      {
      doSomething(last_known_scroll_position);
      ticking = false;
      }
      
    });
  }
  ticking = true;
});

/*
var start = null;
var element = document.getElementById('nav');
element.style.position = 'absolute';

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  element.style.left = Math.min(progress / 10, 200) + 'px';
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);*/