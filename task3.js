var numbers = [1,2,3,4,5,6,7,8,9];
function find(arr,value){
  for(var i=0; i<arr.length; i++){
    if(arr[i]==value) return i;
  }
  return -1;
}
console.log(find(numbers,5));
