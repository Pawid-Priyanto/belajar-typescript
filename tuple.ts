let mahasiswa: [number, string, string] = [1, "Pawit", "Teknik Komputer"];

// accessing tuple
console.log(mahasiswa);
console.log(mahasiswa[0]);
console.log(mahasiswa[1]);
console.log(mahasiswa[2]);

// mengubah tuple mahasiswa

mahasiswa[1] = "Priyanto";
console.log(mahasiswa);
let product: [number, string, number, string] = [
  23,
  "Laptop",
  1200000,
  "Merah",
];
// accessing tuple
console.log(
  `Product id ${product[0]} adalah ${product[1]} dengan harga ${product[2]} berwarna ${product[3]}`
);
