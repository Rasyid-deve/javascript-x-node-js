function minimal(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  }
  
  // Contoh penggunaan:
  console.log(minimal(1, 4)); // output: 1
  console.log(minimal(3, 2)); // output: 2
  console.log(minimal(3, 3)); // output: 3
  
  function findIndex(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i;
      }
    }
    return -1; // Return -1 jika angka tidak ditemukan
  }
  
  // Contoh penggunaan:
  console.log(findIndex([1, 2, 3, 4, 5], 3)); // output: 2
  console.log(findIndex([1, 2, 3, 4, 5], 6)); // output: -1
  console.log(findIndex([1, 2, 3, 4, 5], 5)); // output: 4
  