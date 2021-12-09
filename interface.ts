interface Students {
  nisn: number;
  name: string;
}

let student1: Students = {
  nisn: 1234,
  name: "hadi",
};

console.log(student1);

// optional property interface
interface Mobil {
  merk: string;
  color: string;
  price?: number;
}

let mobil1: Mobil = {
  merk: "toyota",
  color: "black",
  // price optional diisi, dan tidak error jika tidak diisi
  price: 1000000,
};

console.log(mobil1.price ?? 1000);
