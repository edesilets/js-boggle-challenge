'use strict';
//
// Map row/column coordinates onto an array index (i.e. represent a square grid using a simple array). Use this mapping to return (potential) words from letters in the grid.
//
// Activity
//
// Boggle is a word game played with letter-dice arrange in a 4X4 tray.
//
// A tray is just an array of length 16 with each element a single letter string.
//
// A list of coordinate pairs is an array with length <= 4 and each element is an array of length 2. The sub-arrays contain two integers >= 0 and <= 3.
//
// Write a function - in lib/boggle.js - that takes a tray and a list of coordinate pairs and returns a string representing the concatenation of the letters at each of the coordinates.
//
// See bin/boggle.js for an example invocation. Run it with node bin/boggle.js. Run the tests with grunt test.
let boggleArray = [
  [null,null,null,null], [null,null,null,null], [null,null,null,null], [null,null,null,null] ]

const boggle = function boggle(tray, coordinatePairs) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//console.log(boggleArray[0]);
  for (var i = 0; i < boggleArray.length; i++) {
    text = possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text
};

const bigBoggle = function bigBoggle(tray, coordinatePairs) {
  let boggleArray = [
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null],
    [null,null,null,null,null]
  ]
};

const superBigBoggle = function superBigBoggle(tray, coordinatePairs) {
  let boggleArray = [
    [null,null,null,null,null,null],
    [null,null,null,null,null,null],
    [null,null,null,null,null,null],
    [null,null,null,null,null,null],
    [null,null,null,null,null,null],
    [null,null,null,null,null,null]
  ]
};


function setRandomChar() {
	//set all spaces to null
	var boardRows = boggleArray.length;
	for (var i = 0; i < boardRows; i++) {
		for (var z = 0; z < boardRows; z++) {
      randomChars = possible.charAt(Math.floor(Math.random() * possible.length));
      checkerboard[i][z] = randomChars;
		}
	}
}
setRandomChar();
console.log(boggleArray);
module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
