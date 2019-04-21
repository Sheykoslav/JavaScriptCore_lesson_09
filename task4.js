var numbers = [];
for(var i=1; i<=20; i++){
  numbers.push(i);
}
function filterRange(array, a, b){
  var newNumbers = array.slice(a,b);
  return newNumbers;
}
console.log(filterRange(numbers,4,17));
