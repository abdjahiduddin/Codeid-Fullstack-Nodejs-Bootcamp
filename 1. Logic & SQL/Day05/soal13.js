//soal 13
const  findSum =(arr, weight) =>{
    const sumInfo = {}
    const foundItem = []
    for (let i = 0; i < arr.length; i++) {
        if (sumInfo[arr[i]]) {
            foundItem[0] = arr[i]
            foundItem[1] = arr[sumInfo[arr[i]]]
            break
        }

        let diff = weight - arr[i]
        sumInfo[diff] = i
    }
    return `${foundItem[0]} & ${foundItem[1]}`
}

console.log(findSum([1,2,3,4,5],5)); // 4 & 5