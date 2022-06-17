/**
 * hitung detik ke dalam day, hour, minute and seconds
 */


function getPeriodTimes(seconds) {
    if (isNaN(seconds)) {
        return `${seconds} is not number`
    }

    seconds = parseInt(seconds)
    const sec = Math.round(seconds % 60)
    seconds = Math.floor(seconds / 60)

    const minutes = Math.round(seconds % 60)
    seconds = Math.floor(seconds / 60)
    
    const hours = Math.round(seconds % 24)
    const days = Math.floor(seconds / 24)
    
    return `${days} hari ${hours} jam ${minutes} menit ${sec} detik`
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik