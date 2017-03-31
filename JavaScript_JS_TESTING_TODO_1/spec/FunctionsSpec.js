describe("throwDice", function() {

  var diceCount = 1000000;
  var n = [0, 0, 0, 0, 0, 0];

  //test
  it("should return not null", function() {
    expect(throwDice()).not.toBeNull();
  });

  it("should return an integer", function() {
    expect(Number.isInteger(throwDice())).toBe(true);
  });

  it("should returns a number greater than zero", function() {
    expect(throwDice()).toBeGreaterThan(0);
  });

  it("should returns a number less or equal than six", function() {
    expect(throwDice()).toBeLessThan(7);
  });

  it("is executed " + diceCount + " times without failures", function() {
    var fail = false;
    for (i = 0; i < diceCount; i++) {
      var d = throwDice();
      if( (Number.isInteger(d) && d > 0 && d < 7) ) {
        n[d-1]++;
      }else{
        fail = true;
        break;
      }
    }
    expect(!fail).toBe(true);
  });

  it("after one million executions dice is stadistic equilibrate", function() {
    var fail = false;
    var p = [0,0,0,0,0,0];
    diceCount = 1000000;
    for (var i = 0; i < p.length; i++) {
      p[i] = (n[i] * 100) / diceCount;
      if( (p[i] < 16.5) || (p[i] > 16.8) ) {
        fail = true;
        break;
      }
    }
    expect(!fail).toBe(true);
  });

});
