let fruits: string[] = ["Mangga", "Jeruk", "Pear"];
// accessing array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// mengubah array

fruits[0] = "Durian";

// menambah array

fruits.push("Jambu Biji");
fruits.push("Alpukat");
fruits.push("Pepaya");
console.log(fruits);

// menghapus array
delete fruits[3];
console.log(fruits);
console.log(fruits[0]); // return Durian
// console.log(fruits);
let hoby: Array<string> = ["Reading", "Jogging", "Futsal"];

console.log(hoby);

let numbers: Array<number> = [1, 2, 3, 4, 56, 643, 6];

console.log(numbers);
