function reverseWords(str) {
  const wordReverserReducer = (accumulator, current) => current + accumulator;
  const mainReducer = (accumulator, current) => accumulator + " " + current.split('').reduce(wordReverserReducer, "");
  return str.split(' ').reduce(mainReducer, "").trimStart();
}
reverseWords("a b c d");
reverseWords("double  spaced  words");

