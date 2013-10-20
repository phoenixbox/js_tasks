require 'minitest/autorun'
require 'minitest/pride'

require_relative 'fizz'

class FizzTest < MiniTest::Unit::TestCase
  def test_divisible_by_15
    fizz_buzz = FizzBuzz.new
  	assert_equal "FizzBuzz", fizz_buzz.convert(15)
  end

  def test_divisible_by_5
    fizz_buzz = FizzBuzz.new
  	assert_equal "Buzz", fizz_buzz.convert(5)
  end

  def test_divisible_by_3
    fizz_buzz = FizzBuzz.new
  	assert_equal "Fizz", fizz_buzz.convert(3)
  end
end