document.addEventListener('DOMContentLoaded', function () {
    const clickSound = new Audio('assets/click-sound.mp3');
  
    document.querySelectorAll('.click-sound-trigger').forEach(el => {
      el.addEventListener('click', () => {
        clickSound.play();
      });
    });
  });
  