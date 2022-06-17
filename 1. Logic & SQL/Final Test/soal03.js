const array1 = [
  "Mangga",
  "Apel",
  "Melon",
  "Pisang",
  "Sirsak",
  "Tomat",
  "Nanas",
  "Nangka",
  "Timun",
  "Mangga",
];
const array2 = [
  "Bayam",
  "Wortel",
  "Kangkung",
  "Mangga",
  "Tomat",
  "Kembang Kol",
  "Nangka",
  "Timun",
];
const same = [];
const different = [];

array1.forEach((item) => {
  if (array2.indexOf(item) >= 0 && same.indexOf(item) < 0) {
    same.push(item);
  } else if (same.indexOf(item) < 0 && different.indexOf(item) < 0) {
    different.push(item);
  }
});

array2.forEach((item) => {
  if (different.indexOf(item) < 0 && same.indexOf(item) < 0) {
    different.push(item);
  }
});

console.log("Result: ");
console.log(same);
console.log(different);
