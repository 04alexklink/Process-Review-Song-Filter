function songFilter(song, lowValue = 40, highValue = 1000) {
  if(!Number.isInteger(lowValue) || !Number.isInteger(highValue)) {
      throw new Error("Please provide integer threshold values")
  }
  if(song.length === 0) {throw new Error("No song was inputted")}
  var filteredSong = song.map((soundWave) => {
    if(!Number.isInteger(soundWave)) {throw new Error("You have not inputted integer values for song frequency")}
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