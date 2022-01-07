/**
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

var moveZeros = function (arr) {
let result = [];
let zeros = [];
  arr.forEach((element) => {
    if(element===0 ){
      zeros.push(0);
    }else{
      result.push(element);
    }
  });
  return result.concat(zeros);
};
let x = moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]);

