# node-string-algorithms
Just a quick repository to demonstrate an issue I'm having with the Revealing Module Pattern where including one module could easily change the operation of a completely different module, either deliberately or by mistake.

#### User's code
```js
var randomString = require('random-strings');
console.log(randomString.generate()); // Outputs a random string

var nsa = require('node-strings-algorithms');

var randomString = require('random-strings');
console.log(randomString.generate()); // All your base are belong to us
```

#### random-strings module
```js
function generateRandomString(){
  return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

module.exports = {
  generate: generateRandomString
};
```

#### node-string-algorithms module
```js
var randomStrings = require('random-strings.js');

// Override parts of another module
randomStrings.generate = function(){
  return 'All your base are belong to us';
}

module.exports = {
  // String functions go here
}
```
