describe('getScore', function() {
  it("returns a score of 1 for a", function() {
    expect(getScore("a")).to.equal(1);
  });

  it("returns a score of 2 for aa", function() {
    expect(getScore("aa")).to.equal(2);
  });

  it("returns a score of 5 for dog", function() {
    expect(getScore("dog")).to.equal(5);
  });

  it("returns a score of 5 for GOD", function() {
    expect(getScore("GOD")).to.equal(5);
  });

});
