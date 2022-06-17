// SOAL 1
function totalLompat(x,y,k) {
    let posisi = x
    let lompatan = 0
    while (posisi < y) {
        posisi += k
        lompatan++
    }
    return lompatan
}

console.log(totalLompat(10, 85, 30));