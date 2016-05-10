describe("Fizzbuzz", function(){

  it("should return fizz when passed multiple of 3", function() {
    expect(Fizzbuzz.eval(3)).toEqual("fizz");
    expect(Fizzbuzz.eval(9)).toEqual("fizz");
    expect(Fizzbuzz.eval(21)).toEqual("fizz");
  });

  it("should return buzz when passed multiple of 5", function() {
    expect(Fizzbuzz.eval(5)).toEqual("buzz");
    expect(Fizzbuzz.eval(25)).toEqual("buzz");
    expect(Fizzbuzz.eval(10)).toEqual("buzz");
  });

  it("should return fizz buzz when passed multiple of 15", function(){
    expect(Fizzbuzz.eval(15)).toEqual("fizzbuzz");
    expect(Fizzbuzz.eval(30)).toEqual("fizzbuzz");
    expect(Fizzbuzz.eval(45)).toEqual("fizzbuzz");
  });

  it("otherwise should return n", function(){
    expect(Fizzbuzz.eval(2)).toEqual(2);
    expect(Fizzbuzz.eval(4)).toEqual(4);
    expect(Fizzbuzz.eval(17)).toEqual(17);
  });


});
