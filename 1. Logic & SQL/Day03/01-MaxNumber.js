const numbers = [44, 131, 335, 223, 21, 66, 87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays) {
  const maxNum = Math.max(...arrays);
  //   const maxNum = arrays.reduce((prev, curr) => {
  //     return Math.max(prev, curr);
  //     // if (prev > curr) {
  //     //   return prev;
  //     // }
  //     // return curr;
  //   });
  return maxNum;
}

console.log(maxNumber(numbers));
