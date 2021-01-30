function songFilter(song, lowValue = 40, highValue = 1000) {
  _iscorrectOrderOfThresholdsInputted(lowValue, highValue)
  _isThresholdsIntegerValues(lowValue, highValue);
  _isSongProvided(song);
  var filteredSong = song.map((soundWave) => {
    _isSongFrequenciesIntegers(soundWave);
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

function _iscorrectOrderOfThresholdsInputted (lowValue, highValue) {
  if(lowValue > highValue) {
    throw new Error ("lowValue is greater than highValue provided.")
  }
}
function _isThresholdsIntegerValues(lowValue, highValue) {
  if(!Number.isInteger(lowValue) || !Number.isInteger(highValue)) {
    throw new Error("Please provide integer threshold values")
  }
}
function _isSongProvided(song) {
  if(song.length === 0) {throw new Error("No song was inputted")};
}
function _isSongFrequenciesIntegers(soundWave) {
  if(!Number.isInteger(soundWave)) {
    throw new Error("You have not inputted integer values for song frequency");
  }
}
