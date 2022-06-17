//soal 12
function range(startOrEnd, end, step) {
  if (arguments.length === 1) {
    return [...Array(startOrEnd).keys()];
  }
  return rangeFromStartToEnd(startOrEnd, end, step);
}

function rangeFromStartToEnd(start, end, step = 1) {
  const len = end - start;
  const newArr = Array.from(
    { length: len },
    (value, index) => start + index * step
  );
  //   const newArr = Array.from(Array(len).keys()).map(
  //     (value, index) => start + index * step
  //   );
  return newArr;
}

console.log(range(9)); //(9) [0, 1, 2, 3, 4, 5, 6, 7, 8]

console.log(range(5, 9)); //(4) [5, 6, 7, 8]
console.log(range(10, 19, 2)); //(4) [5, 6, 7, 8]
console.log(range(5, 9, 3)); //(4) [5, 6, 7, 8]
