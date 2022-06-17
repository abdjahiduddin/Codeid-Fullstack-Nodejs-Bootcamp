/** 
  Diketahui rumus area = pi * radius * radius dimana pi = 3.14159, r = radius buat function dengan nama getAreaCircle(r)
  Output Contraint : 
  getAreaCircle('-1'); //return radius -1 <= 0, try higher
  getAreaCircle('a');  //return Inputan harus dalam angka
  getAreaCircle(5);    //retun 78.53975
 */

function getAreaCircle(r) {
  if (isNaN(r)) {
    return "Inputan harus dalam angka";
  }

  // const radius = parseInt(r);

  if (r <= 0) {
    return "radius -1 <= 0, try higher";
  }

  // const area = Math.PI * Math.pow(r, 2);
  const area = 3.14159 * Math.pow(r, 2);
  return area.toFixed(5);
}

console.log(getAreaCircle("-1")); //return radius -1 <= 0, try higher
console.log(getAreaCircle("a")); //return Inputan harus dalam angka
console.log(getAreaCircle(5)); //retun 78.53975
