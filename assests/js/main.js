$(function() {
	$('.hamburger-button').on('click', function(event){
		event.preventDefault();
		
		$(this).toggleClass('active');
		$('.overlay').toggleClass('visible');
	});
});

const image = document.getElementById('my-image');
const zoomInButton = document.getElementById('zoom-in-button');
const zoomOutButton = document.getElementById('zoom-out-button');

let scale = 1;

zoomInButton.addEventListener('click', function() {
  scale += 0.1;
  image.style.transform = `scale(${scale})`;
});

zoomOutButton.addEventListener('click', function() {
  scale -= 0.1;
  if (scale <= 0) {
    scale = 0;
  }
  image.style.transform = `scale(${scale})`;
});

document.addEventListener('keydown', function(event) {
  if (event.key === '+') {
    scale += 0.1;
    image.style.transform = `scale(${scale})`;
  }
  if (event.key === '-') {
    scale -= 0.1;
    if (scale <= 0) {
      scale = 0;
    }
    image.style.transform = `scale(${scale})`;
  }
});
