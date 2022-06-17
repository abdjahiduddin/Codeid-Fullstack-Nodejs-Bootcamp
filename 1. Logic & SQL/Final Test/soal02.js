// SOAL 2

const rotateArray = (arr, x) => {
    for (let i = 0; i < x; i++) {
        const tmpArr = [...arr]
        const lastItem = arr.pop()
        arr.unshift(lastItem)
        console.log(tmpArr +" => "+arr)
    }
    return `Result: ${arr}`
}

const arr = [3,8,9,7,6] 
console.log(rotateArray(arr,3))