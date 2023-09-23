// let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

// for(const arrayItem of myArray) {
//     console.log(arrayItem)
// }

// let i = 1

// while (i <= 100) {
//     console.log(i);
//     i++;
// }
function scoreChecker(score) {
    let result;
  
    if (score >= 90) {
      result = 'Selamat! Anda mendapatkan nilai A.';
    } else if (score >= 80) {
      result = 'Anda mendapatkan nilai B.';
    } else if (score >= 70) {
      result = 'Anda mendapatkan nilai C.';
    } else if (score >= 60) {
      result = 'Anda mendapatkan nilai D.';
    } else {
      result = 'Anda mendapatkan nilai E.';
    }
  
    return result;
  }
  
  let score = 100; // Ganti nilai ini sesuai dengan nilai yang ingin Anda evaluasi
  let hasilEvaluasi = scoreChecker(score);
  
  console.log(hasilEvaluasi); // Outputkan hasil evaluasi
  module.exports = scoreChecker;
  