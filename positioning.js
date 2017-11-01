function positioning(string) {
  var letterPosition = {};
  for (var index in string) {
    var letter = string[index]
    if (letter === " ") continue;
    if (!(letter in letterPosition)) {
      letterPosition[letter] = [];
    }
    letterPosition[letter].push(index); // how do I push the index to the array?

  }

  return letterPosition;
}

console.log(positioning("lighthouse in the house"));
console.log(positioning("hello"));