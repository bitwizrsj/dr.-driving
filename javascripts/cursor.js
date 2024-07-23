const $bigBall = document.querySelector('.cursor__ball--big');
const $smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.hoverable');

// Listeners for cursor movement
document.body.addEventListener('mousemove', onMouseMove);

function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
}

// Listeners for hover effects
$hoverables.forEach(elem => {
  elem.addEventListener('mouseenter', onMouseEnter);
  elem.addEventListener('mouseleave', onMouseLeave);
});

function onMouseEnter() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4
  });
}

function onMouseLeave() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1
  });
}

// Listeners for box hover effects
var boxes = document.querySelectorAll(".box");
boxes.forEach(function(elem) {
elem.addEventListener("mouseenter", function() {
  var att = elem.getAttribute("data-image");
  $bigBall.style.width = "470px";
  $bigBall.style.height = "370px";
  $bigBall.style.zIndex = "9"; // Adjust z-index as needed
  $bigBall.style.borderRadius = "0";
  $bigBall.style.backgroundImage = `url(${att})`;
});


  elem.addEventListener("mouseleave", function() {
    elem.style.backgroundColor = "transparent"
    $bigBall.style.width = "20px";
    $bigBall.style.height = "20px";
    $bigBall.style.borderRadius = "50%";
    $bigBall.style.backgroundImage = "none";
  });
});


