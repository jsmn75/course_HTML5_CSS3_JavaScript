describe("throwDice", function() {

  var diceCount = 100000;
  var n = [0,0,0,0,0,0];
  var p = [0,0,0,0,0,0];

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
    if(!fail) {
      for (var i = 0; i < p.length; i++) {
        p[i] = (n[i] * 100) / diceCount;
        console.log("n["+i+"]: " + n[i] + "  p[" +i+ "]: " +p[i]);
      }
    }
    expect(!fail).toBe(true);
  });

  it("after " + diceCount + " executions dice is stadistic equilibrate" , function() {
    var fail = false;
    for (var i = 0; i < p.length; i++) {
      if( (p[i] < 13.6) || (p[i] > 19.6) ) {
        fail = true;
        break;
      }
    }
    expect(!fail).toBe(true);
  });

});
