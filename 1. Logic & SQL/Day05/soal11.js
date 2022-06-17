//soal 11
function startsWithE(animals) {
    const newArr = animals.filter(animal => animal.toLowerCase().startsWith("e"))
    return newArr
}

const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog',
    'eel', 'rabbit', 'goose', 'earwig'];

console.log(startsWithE(animals)); // ["elephant", "emu", "eel", "earwig"]