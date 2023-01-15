import Player from '@vimeo/player';

var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let time = 0;

const setTime = () => {
  try {
    const timeFromLS = JSON.parse(
      localStorage.getItem('videoplayer-current-time')
    );

    if (timeFromLS === null) {
      return;
    }

    time = timeFromLS.seconds;
  } catch (err) {
    console.log(err);
  }
};

setTime();

player.setCurrentTime(time);

const getTime = currentTime => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
};

player.on('timeupdate', throttle(getTime, 1000));
