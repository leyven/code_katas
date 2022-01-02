/**
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.


*/
function anagramsfirstV(word, words) {
  console.log(words.sort());
  var sortAlphabets = function (text) {
    return text.split('').sort().join('');
  };
  let key = sortAlphabets(word);
  return words.filter(element => {
    let needle = sortAlphabets(element);
    console.log(needle);
    if (needle === key) {
      return true;
    }
  });
}

/**
 * solution after refactoring
 * @param {*} word 
 * @param {*} words 
 * @returns 
 */
function anagrams(word, words) {
  let key = word.split('').sort().join('');
  return words.filter(element => {
    if (element.split('').sort().join('') === key) {
      return true;
    }
  });
}
