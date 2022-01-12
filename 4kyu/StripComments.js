/**
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(input, markers) {
  let exceptions = ['\n'];
  let output = input.split('');
  let acumulator = '';
  let isacumulable = true;
  output.forEach((element) => {
    if (exceptions.includes(element)) {
      isacumulable = true;
    }
    if (markers.includes(element)) {
      acumulator = acumulator.slice(0, -1);
      isacumulable = false;
    }
    if (isacumulable) {
      acumulator += element;
    }
    console.log(acumulator);
  });
  return acumulator.trim().replace(/ +(?= )/g, '');
}
solution(
  "apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]
);