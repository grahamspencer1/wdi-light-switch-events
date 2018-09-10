document.addEventListener('DOMContentLoaded', function(){
  var switchOff = document.querySelector('.switch');
  var shade = document.querySelector('.status');
  var lightLevel = document.querySelector('body');

  switchOff.addEventListener('click', function() {
    switchOff.classList.toggle('off');
    switchOff.classList.toggle('on');
    lightLevel.classList.toggle('dark');
    lightLevel.classList.toggle('light');

    if (switchOff.classList.contains('off')) {
      shade.innerHTML = "Who turned out the lights?";
    } else {
      shade.innerHTML = "It's so bright in here!";
    }

  });
});
