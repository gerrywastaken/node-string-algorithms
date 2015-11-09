var randomStrings = require('random-strings.js');

// Override parts of another module
randomStrings.generate = function(){
	return 'All your base are belong to us';
}

module.exports = {
	// String functions go here
}