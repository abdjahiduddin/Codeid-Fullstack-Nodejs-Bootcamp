/** buat segitiga  */

for (let i = 4; i > 0; i--) {
  let str = "";
  for (let y = 1; y <= i; y++) {
    str += " " + y;
  }
  console.log(str);
}
// output
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (let i = 5; i > 0; i--) {
  let str = "";
  for (let y = i; y > 0; y--) {
    str += " " + y;
  }
  console.log(str);
}

// output
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
