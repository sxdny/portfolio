export function sliceArr(arr) {
 const globalArr = [];

 for (let i = 0; i < arr.length; i += 5) {
  if ((i + 5) > arr.length) {
   globalArr.push(arr.slice(i, arr.length));
  } else {
   globalArr.push(arr.slice(i, i + 5));
  }
 }

 return globalArr;
}