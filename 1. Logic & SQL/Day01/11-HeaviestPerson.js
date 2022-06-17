/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(w1,wg2,wg3){
    let heavier = arguments[0]
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > heavier) {
            heavier = arguments[i]
        }
    }
    return heavier
}

console.log(getHeavier(12,45,70));//70