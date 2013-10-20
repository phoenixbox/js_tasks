var BestShuffle = function() {
	this.bestShuffle = function(word){
		chars = this.splitWord(word); // split the text
		var hash =  this.hashOfIndexPositionOccurances(chars)
		var ndx = this.joinCharArrays(this.shuffleAllCharArrays(hash))
		var shuffledArraysHash = this.shufflePrep(ndx)
		return this.finalShuffle(shuffledArraysHash)
	};

	this.display = function(word){
		var shuffledWord = this.bestShuffle(word);
    var count = 0;
    for (var i= 0; i<word.length; i++){
      count += word.substr(i, 1) == shuffledWord.substr(i,1) ?1 :0;
    }
    return word+', '+shuffledWord+', ('+count+')';
	};

	this.shufflePrep = function(ndx) {
		var charArray = chars
		var cycles= [];
    for (var i= 0; i < counter; i++)  cycles[i]= [];
    for (var i= 0; i< charArray.length; i++)  cycles[i%counter].push(ndx[i]);

  	var ref =  this.joinCharArrays(cycles);

  	for (var i= 0; i < counter; i++)  cycles[i].push(cycles[i].shift());
    var prm = this.joinCharArrays(cycles);

  	var shuffledArraysHash = {'ref': ref,'prm': prm}

    return shuffledArraysHash
	};

	this.finalShuffle = function(shuffledArraysHash){
		var charArray = chars
		var shf= [];
    for (var i= 0; i< charArray.length; i++) {
    	shf[shuffledArraysHash['ref'][i]] = charArray[shuffledArraysHash['prm'][i]];
    }
    return shf.join('');
	};


	this.splitWord = function(word){
		return word.split('')
	};

	this.shuffleAllCharArrays = function(hash){
		var shuffledArrays= [];
	  for (var singleChar in hash)  shuffledArrays.push(this.shuffleCharArrayPositions(hash[singleChar]));
		return shuffledArrays
	}

	this.joinCharArrays =	function (array) {
		// like .join('') except producing an array instead of a string
    var joinedCharsArray = [];
    for (var i= 0; i<array.length; i++)
        for (var x= 0; x<array[i].length; x++) {
        	joinedCharsArray.push(array[i][x]);
        }
    return joinedCharsArray;
	}


	this.initializeHash = function(chars){
		var hash = {}
		for(i=0; i<chars.length; i++){
			hash[chars[i]] = []
		}
		return hash
	};

	this.hashOfIndexPositionOccurances = function(chars){
		// var chars = this.splitWord(word);
		var hash = this.initializeHash(chars);
		counter = 0;
		for ( i= 0; i < chars.length; i++) {
		  var singleChar = chars[i];
			hash[singleChar].push(i)
		  if (counter < hash[singleChar].length)  counter++;
		};
		return hash
	};

	this.shuffleCharArrayPositions = function(array){
		var len= array.length;
		for (var i= 0; i < len; i++) {
		    var number= Math.floor(Math.random()* len);
		    var total = array[number];
		    array[number]= array[i];
		    array[i]= total;
		}
		return array;
	}
	// ch singleChar
	// hash
};
module.exports = BestShuffle;


// [1]










// var inds= [];
// for (var ch in gr)  inds.push(shuffle(gr[ch]));

// function raze(a) { // like .join('') except producing an array instead of a string
//   var r= [];
//   for (var i= 0; i<a.length; i++)
//       for (var k= 0; k<a[i].length; k++)  r.push(a[i][k]);
//   return r;
// }
