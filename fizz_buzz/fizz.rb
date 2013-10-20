require 'pry'

class FizzBuzz
	def convert(input)
		if (input%15).zero?
			"FizzBuzz"
		elsif (input%5).zero?
			"Buzz"
		else (input%3).zero?
			"Fizz"
		end
	end
end