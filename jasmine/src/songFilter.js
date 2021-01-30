function songFilter(song, lowValue, highValue) {
  var output = song.map((soundWave) => {
    if(soundWave < lowValue) {
      return lowValue;
    };
    return soundWave;
  });
  return output;
};