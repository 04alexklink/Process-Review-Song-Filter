describe("songFilter", () => {
  var array;
  it("returns the song unchanged when thresholds are unbreached", () => {
    array = [10, 20, 40];
    expect(songFilter(array, 10, 40)).toEqual([10, 20, 40]);
  })
  it("returns the song with lowest value modified to fit threshold requirement", () => {
    array = [10, 20, 40];
    expect(songFilter(array, 15, 40)).toEqual([15, 20, 40]);
  })
  it("returns the song with highest value modified to fit threshold requirement", () => {
    array = [10, 20, 40];
    expect(songFilter(array, 10, 35)).toEqual([10, 20, 35]);
  })
  it("returns the song with both low and high value modifications when both exceeded", () => {
    array = [10, 45, 100, 1001];
    expect(songFilter(array, 40, 1000)).toEqual([40, 45, 100, 1000]);
  })
  describe("edge cases", () => {
    it("throws error if try to input empty array/no song", () => {
      array = [];
      expect(function() {songFilter(array, 10, 40)}).toThrowError("No song was inputted");
    })
    it("has default lower value of 40 and higher value of 1000 if neither are inputted", () => {
      array = [10, 45, 100, 1001];
      expect(songFilter(array)).toEqual([40, 45, 100, 1000]);
    })
    it("requires song frequencies to all be integers", () => {
      array = ["hello", 45, 100];
      expect(function() {songFilter(array, 10, 40)}).toThrowError("You have not inputted integer values for song frequency");
    })
    it("requires low and high values provided to be integers", () => {
      array = [10, 20, 45];
      expect(function() {songFilter(array, "Hello", 40)}).toThrowError("Please provide integer threshold values");
      expect(function() {songFilter(array, 10, "Hello")}).toThrowError("Please provide integer threshold values")
    })
  })
})