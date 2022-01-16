/**
In this kata you have to create all permutations of an input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

permutations('a'); // ['a']
permutations('ab'); // ['ab', 'ba']
permutations('aabb'); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
 */

function permutations(string) {

  if (!!string.length && string.length < 2) {
    return [string];
  }

  let permutationsArray = [];

  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    if (string.indexOf(char) != i)
      continue;

    let remainder = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of permutations(remainder)) {
      permutationsArray.push(char + permutation);
    }
  }
  return permutationsArray;
}
