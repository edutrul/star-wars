/* task: Replace dom elements to classes! */
/**
 * A simple WS to play with two persons.
 * 
 * @author Eduardo Telaya Escobedo.
 * twitter account: @edutrul
 * gmail account: luis.eduardo.telaya@gmail.com
 */

/**
 * Execute when document is ready.
 */
$(document).ready(function() {
  playSound("Droid-Fly.wav");
  numTieFighters = 11;

  function playSound(sound) {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'musics/' + sound);
    audioElement.setAttribute('autoplay', 'autoplay');
    $.get();
    audioElement.play();
  }
  
  function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }
  
  
  $("body").click(function() {
    playSound("XWing-Laser.wav");
  });
  
  $(".tie-fighter").click(function(e) {
    $(this).css('visibility', 'hidden');
    numTieFighters--;
    if (numTieFighters == 0) {
      alert('CONGRATULATIONS! You have WON');
      window.location.reload();
    }
  });

	$('body').videoBG({
    mp4: 'videos/space.mp4',
		webm: 'videos/space.webm',
		fullscreen: true,
	});
  min = 10;
  max = 400;
  left_go = 0;
  for (var i = 0; i < numTieFighters; i++) {
    top_beginning = getRandomInt(min, max);
    left_beginning = getRandomInt(min, max);
    right_beginning = getRandomInt(min, max);
    bottom_beginning = getRandomInt(min, max);
    top = getRandomInt(min, max);
    bottom = getRandomInt(min, max);
    left = getRandomInt(min, max);
    right = getRandomInt(min, max);
    if (i >= 5) {
      left_go = 200;
    }
    
    $('#tie-fighter-' + i)
      .css('top', top_beginning + 10 + 'px')
      .css('left', left_beginning + 0 + 'px')
      .css('right', right_beginning + left_go + 'px')
      .css('bottom', bottom_beginning + 'px')
      .sprite({fps: 1, no_of_frames: 1})
      .spRandom({top: top, bottom: bottom + 50, left: left, right: right + left_go})
      .isDraggable()
      .activeOnClick()
      .active();
  }

    var time = 10;
    display = $('#time');
    startTimer(time, display);


function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      
      playSound("TIE-Fly" + getRandomInt(1, 13) + ".wav");
      display.text(seconds);
      if (--timer < 0) {
          timer = duration;
          if (numTieFighters != 0) {
            alert('TIME IS OVER! - GAME OVER! play again!');
            window.location.reload();
          }
          
      }
  }, 1000);
  
  console.log(getRandomInt(100, 500));
}
});


/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}