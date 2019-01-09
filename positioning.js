let input = "lighthouse in the house";

function positioning(string) {
  let small = string.toLowerCase();
  let obj = {};
  for (let i = 0; i < small.length; i++) {
    let letter = small[i];
    if (!obj.hasOwnProperty(letter)) {
      obj[letter] = [];
    }
    obj[letter].push(i);
  }
  delete obj[' '];
  return obj;
}


console.log(positioning(input));