function generateRandomString(){
  return Math.random().toString(36).replace(/[^a-z]+/g, '');
}

module.exports = {
  generate: generateRandomString
};
