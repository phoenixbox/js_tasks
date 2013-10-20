require('./fizz');

describe("FizzBuzz", function() {
  var fizz_buzz = new FizzBuzz();

  it("input is divisible by 15", function() {
	  var output = fizz_buzz.convert(15);
	  expect(output).toEqual('FizzBuzz');
  });

  it("input is divisble by 5", function() {
  	var output = fizz_buzz.convert(5)
  	expect(output).toEqual('Fizz')
  });

  it("input is divisble by 3", function() {
  	var output = fizz_buzz.convert(3)
  	expect(output).toEqual('Buzz')
  });
});