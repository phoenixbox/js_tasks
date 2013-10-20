var BestShuffle = require('./best_shuffle');

describe("BestShuffle", function() {
	var best = new BestShuffle();
	var abracadabra = 'abracadabra'

	it('splits the word into chars', function(){
		var result = best.splitWord('abracadabra');
		expect(result).toEqual(['a','b','r','a','c','a','d','a','b','r','a'])
	})

	it('initializes the hash', function(){
		var result = best.initializeHash('abc')
		expect(result).toEqual({'a':[],'b':[],'c':[]})
	})

	it('initializes the hash', function(){
		var result = best.initializeHash('aaa')
		expect(result).toEqual({'a':[]})
	})

	it('initializes the hash', function(){
		var result = best.initializeHash('aabbccdd')
		expect(result).toEqual({'a':[],'b':[],'c':[],'d':[]})
	})

	it('return a hash of the index position occurances of a character',function(){
		var result =  best.hashOfIndexPositionOccurances('aaa');
		expect(result).toEqual({'a': [0,1,2] })
	})

	it('return a hash of last occurring index position of 3 characters', function(){
		var result = best.hashOfIndexPositionOccurances('aabbbcccc');
		expect(result).toEqual({'a':[0,1], 'b':[2,3,4],'c':[5,6,7,8]});
	})

	it('shuffles the array of index positions',function(){
		var result = best.shuffleCharArrayPositions([0,1,2])
		expect(result).toNotEqual([0,1,2])
	})

	it('shuffles all the arrays of the hash', function(){
		var hash = {'a': [0,1,2], 'b':[3,4,5] };
		var result = best.shuffleAllCharArrays(hash)
		expect(result).toNotEqual({'a': [0,1,2], 'b':[3,4,5] })
	})

	it('joins the each chars array and returns a single array', function(){
		var inds = [ [ 1, 2, 0 ], [ 4, 3, 5 ] ]
		var result = best.joinCharArrays(inds)
		expect(result).toEqual( [1,2,0,4,3,5] )
	})
	it('shufflePrep', function(){
		var word = 'aaabbbbasdfghj'
		chars = best.splitWord(word);
		// spyOn(BestShuffle, 'joinCharArrays').andReturn([1,2,0,4,3,5])
		var hash =  best.hashOfIndexPositionOccurances(chars);
		var ndx = best.joinCharArrays(best.shuffleAllCharArrays(hash));
		var result = best.shufflePrep(ndx);
		console.log('result >', result)
		// ndx > [ 1, 2, 7, 0, 4, 3, 6, 5, 8, 9, 10, 11, 12, 13 ]
		// cycles > [ [ 1, 4, 8, 12 ], [ 2, 3, 9, 13 ], [ 7, 6, 10 ], [ 0, 5, 11 ] ]
		// result > [ 1, 4, 8, 12, 2, 3, 9, 13, 7, 6, 10, 0, 5, 11 ]
		expect(result['ref'].length).toEqual(ndx.length)
	});

	it('finalShuffle', function(){
		var word = 'aaabbbbasdfghj'
		chars = best.splitWord(word);
		// spyOn(BestShuffle, 'joinCharArrays').andReturn([1,2,0,4,3,5])
		var hash =  best.hashOfIndexPositionOccurances(chars);
		var ndx = best.joinCharArrays(best.shuffleAllCharArrays(hash));
		var shuffledArraysHash = best.shufflePrep(ndx);
		var result = best.finalShuffle(shuffledArraysHash)
		expect(result).toNotEqual(word)
	});
	it('display', function(){
		var word = 'sam'
		chars = best.splitWord(word);
		// spyOn(BestShuffle, 'joinCharArrays').andReturn([1,2,0,4,3,5])
		var hash =  best.hashOfIndexPositionOccurances(chars);
		var ndx = best.joinCharArrays(best.shuffleAllCharArrays(hash));
		var shuffledArraysHash = best.shufflePrep(ndx);
		var shuffledWord = best.finalShuffle(shuffledArraysHash)
		var result = best.display(shuffledWord);
		expect(result).toEqual('ams, msa, (0)')
	})
});