const arr = [1,2,3,4];
const diff = 1;
const newArr = [];
let obj = {};
for(let i = 0; i< arr.length - 1; i++ ) {
  for(let j= i+1; j<arr.length ; j++) {
    if((arr[j] - arr[i]) === diff) {
      obj = {
        a: arr[i],
        b: arr[j]
      };
      newArr.push(obj);
    }
  }
}
console.log(newArr);
