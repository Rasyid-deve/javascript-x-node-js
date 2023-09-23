let myVariable = 12;
myVariable = 30;
myVariable = 5;

console.log(myVariable);

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) { // Memeriksa apakah bilangan i adalah genap
    evenNumbers.push(i);
  }
}

console.log(evenNumbers);

// 1. Membuat variabel currency dengan Map
const currency = new Map([
    ["USD", 14000],
    ["JPY", 131],
    ["SGD", 11000],
    ["MYR", 3500]
  ]);
  
  // 2. Menghitung priceInIDR dengan nilai currency JPY
  const priceInJPY = 50000; // Misalkan harga dalam JPY adalah 10000
  const exchangeRateJPY = currency.get("JPY"); // Mengambil nilai kurs JPY dari Map
  const priceInIDR = priceInJPY * exchangeRateJPY;
  
  console.log(priceInIDR); // Hasilnya akan mencetak harga dalam IDR berdasarkan kurs JPY
  
const artistsAndSongs = {
    "Keyakizaka46": ["Silent Majority"],
    "Blackpink": ["How You Like That", "Ice Cream"],
    "JKT48": ["Rapsodi", "Heavy Rotation"],
    "Twice": ["What is Love?"],
}

artistsAndSongs["Babymetal"] = ["Gimme chocolate"];
delete artistsAndSongs["Keyakizaka46"];
artistsAndSongs["Blackpink"].push("Rose - Gone");

console.log(artistsAndSongs);