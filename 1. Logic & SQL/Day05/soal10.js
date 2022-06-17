//soal 10
const animal = ["dog", "cat", "seal", "walrus", "lion", "cat"];
// Find where the 'walrus' item is
// Join the portion before 'walrus' to the portion after 'walrus'
// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']

const animalsSliced = (arr, item) => {
  const itemIndex = arr.indexOf(item);
  const beforeItemArr = arr.slice(0, itemIndex);
  const afterItemArr = arr.slice(itemIndex + 1);
  const newArr = [...beforeItemArr, ...afterItemArr];
  return newArr;
};

console.log(animalsSliced(animal, "walrus"));
