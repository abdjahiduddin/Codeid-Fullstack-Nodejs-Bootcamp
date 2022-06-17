//soal 4
// Buatlah algoritma untuk empat soal di bawah ini, sesuai dengan nilai “n”
// Contoh output di bawah adalah ketika nilai “n” = 5

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

const soalEmpatA = (n) => {
  console.log("********* Soal 4 - A *********");
  for (let i = 1; i <= n; i++) {
    let strNum = "";
    for (let y = 1; y <= i; y++) {
      strNum += i + " ";
    }
    console.log(strNum);
  }
};

soalEmpatA(5);

// 1
// 2 1
// 3 2 1
// 4 3 2 1
// 5 4 3 2 1

const soalEmpatB = (n) => {
  console.log("********* Soal 4 - B *********");
  for (let i = 1; i <= n; i++) {
    let strNum = "";
    for (let y = i; y >= 1; y--) {
      strNum += y + " ";
    }
    console.log(strNum);
  }
};

soalEmpatB(5);

// 1
// 2 3
// 4 5 4
// 3 2 1 2
// 3 4 5 4 3

const soalEmpatC = (n) => {
  console.log("********* Soal 4 - C *********");
  let count = 1;
  let stat = "UP";
  for (let i = 1; i <= n; i++) {
    let strNum = "";
    for (let y = 1; y <= i; y++) {
      strNum += count + " ";
      if (count === n) {
        stat = "DOWN";
      } else if (count === 1) {
        stat = "UP";
      }

      if (stat === "UP") {
        count++;
      } else {
        count--;
      }
    }
    console.log(strNum);
  }
};

soalEmpatC(5);

// soalEmpatC(5)
// 1 10 11 20 21
// 2 9 12 19 22
// 3 8 13 18 23
// 4 7 14 17 24
// 5 6 15 16 25

const soalEmpatD = (n) => {
  console.log("********* Soal 4 - D *********");
  let multiply = n * 2;
  for (let i = 1; i <= n; i++) {
    let strNum = "";
    let tmpA = 0;
    let tmpB = 0;
    for (let y = 1; y <= n; y++) {
      if (y === 1) {
        strNum += i + " ";
        tmpA = i;
      } else if (y === 2) {
        strNum += (multiply + 1) - i + " ";
        tmpB = (multiply + 1 )- i;
      } else if (y % 2 === 1) {
        strNum += tmpA + multiply + " ";
        tmpA += multiply;
      } else if (y % 2 === 0) {
        strNum += tmpB + multiply + " ";
        tmpB += multiply;
      }
    }
    console.log(strNum);
  }
};

soalEmpatD(5);
