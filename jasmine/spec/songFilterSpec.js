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
})