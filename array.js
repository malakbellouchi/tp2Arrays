function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    } else {
      return -1;
    }
  }
}

console.log(myIndexOf(["a", "s", "d", "f"], "s"));
console.log(myIndexOf(["1", "2", "-3", "5"], "4"));
