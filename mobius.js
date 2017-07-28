const mobius = () => {
  const player = document.getElementById('movie_player');

  player.addEventListener('onStateChange', (state) => {
    if (state == 0) {
      player.playVideo();
    }
  });
};

const script = document.createElement('script');
script.textContent = `(${mobius})()`;
document.body.appendChild(script);
