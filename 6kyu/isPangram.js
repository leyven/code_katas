/**
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


*/
function isPangram(string) {
  let key = string.toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split('')
    .filter((item, pos, self) => {
      return self.indexOf(item) == pos;
    })
    .sort().join('').trim();
  if (key.length === 26) {
    return true;
  }
  return false;

}

let x = isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ");
console.log(x);

let y = isPangram("How quickly daft jumping zebras vex.");
console.log(y);

