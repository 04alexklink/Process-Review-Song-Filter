function songFilter(song, lowValue, highValue) {
  if(song.length === 0) {throw new Error("No song was inputted")}
  var filteredSong = song.map((soundWave) => {
    if(soundWave < lowValue) {
      return lowValue;
    } 
    if(soundWave > highValue) {
      return highValue;
    }
    return soundWave;
  });
  return filteredSong;
};