/** input 4 digit, cek apakah angka palindrome */

function isPalindrome(angka){
    if (isNaN(angka)) {
        return `${angka} is not an number`
    }
    
    const strAngka = "" + angka
    const angkaArr = ("" + angka).split("")
    const reverseAngkaArr = angkaArr.reverse().join("")

    if (strAngka === reverseAngkaArr) {
        return `${strAngka} is palindrome`
    } else {
        return `${strAngka} is not palindrome`
    }
}


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome