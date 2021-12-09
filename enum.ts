enum Gender {
  Male,
  Female,
}

let jenisKelamin: Gender = Gender.Male;

console.log(jenisKelamin); // return 0

enum Blood {
  A = 9,
  B = 10,
  AB = 11,
  O = 12,
}

let typeBlood: Blood = Blood.A;

console.log(typeBlood); // return 9

// enum string
enum Prodi {
  computer = "computer",
  matematika = "matematika",
  akutansi = "akutansi",
}

let jurusanKuliah: Prodi = Prodi.computer;

console.log(jurusanKuliah); // return computer
