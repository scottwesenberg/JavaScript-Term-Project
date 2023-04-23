const container = document.querySelector('.image-container');
const images = container.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    img.style.filter = 'none';
  });

  img.addEventListener('mouseleave', () => {
    img.style.filter = 'blur(5px)';
  });
});

window.addEventListener("load", function() {
  var audio = document.getElementById("binks");
  audio.play();
});


var audio = document.getElementById("binks");

function playAudio() { 
  audio.play(); 
}

function pauseAudio() { 
  audio.pause(); 
}

