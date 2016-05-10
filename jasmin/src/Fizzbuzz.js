var Fizzbuzz = {
  isDivisibleBy: function(divisor, n){
    return n % divisor === 0;
  },
  eval: function(n){
    if(this.isDivisibleBy(15, n)){
      return "fizzbuzz";
    }
    if(this.isDivisibleBy(3, n)) {
      return "fizz";
    }
    if(this.isDivisibleBy(5, n)) {
      return "buzz";
    }
    return n;
  }
}
