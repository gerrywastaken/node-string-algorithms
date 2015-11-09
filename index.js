// random-strings module
function generateRandomString(){
  return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

module.exports = {
  generate: generateRandomString
};



// node-string-algorithms module
var randomStrings = require('random-strings.js');

// Override parts of another module
randomStrings.generate = function(){
	return 'All your base are belong to us';
}

module.exports = {
	// String functions go here
}



// User's code
var randomString = require('random-strings');
console.log(randomString.generate()); // Outputs a random string

var nsa = require('node-strings-algorithms');

var randomString = require('random-strings');
console.log(randomString.generate()); // All your base are belong to us
