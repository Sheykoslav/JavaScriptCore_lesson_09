var string = 'my-short-string';

function camelize(str){
    var arr = str.split("-");
    for (var i = 1; i < arr.length; i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join('');
}
console.log(camelize(string));
