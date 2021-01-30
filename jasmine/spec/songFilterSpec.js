describe("songFilter", () => {
  var array;
  it("returns the song unchanged when thresholds are unbreached", () => {
    array = [10, 20, 40];
    expect(songFilter(array, 10, 40)).toEqual([10, 20, 40]);
  })
})