/**
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.


*/

Array.prototype.sameStructureAs = function (other) {
  let otherStr = JSON.stringify(other)
let thisStr =JSON.stringify(this)
let exotherStr=otherStr.replace(/[0-9"]/g, "")
let exthisStr=thisStr.replace(/[0-9"]/g, "")
  console.log(exthisStr,exotherStr);
if( exotherStr===exthisStr){
  return true
}
return false
// Return 'true' if and only if 'other' has the same
  // nesting structure as 'this'.

  // Note: You are given a function isArray(o) that returns
  // whether its argument is an array.
};

function printAll(a) {

a.forEach(element => {
console.log(" the magician",element)
if(isArray(element)){
  printAll(element);
}
});