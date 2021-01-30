function songFilter(song, lowValue, highValue) {
  var output = song.map((soundWave) => {
    if(soundWave < lowValue) {
      return lowValue;
    } 
    if(soundWave > highValue) {
      return highValue;
    }
    return soundWave;
  });
  return output;
};