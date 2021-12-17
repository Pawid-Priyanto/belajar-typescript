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


interface User { 
  id: number
  name: string
}


let user1: User = {
  id: 1,
  name: 'Hariono'
}

console.log(user1);
user1.name = 'Shaka'
console.log(user1);

interface mathFunc {
  (a: number, b: number): number
}

const add: mathFunc = (x: number, y:number): number => x + y
const sub: mathFunc = (x: number, y:number): number => x - y


interface PersonInterface {
  id: number
  name: string
  register(): string
}

class Person implements PersonInterface {
  id: number
  name: string
  

  constructor(id: number, name: string){
    this.id = id
    this.name = name
  }

  register(){
    return `${this.name} is now registered`
  }
}

const satu = new Person(1, 'Pawit')
const dua = new Person(1, 'Hardi')

console.log(satu, dua);

console.log(dua.register());

// subclass

class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

let emp = new Employee(2, 'Ricky', 'Frontend Engineer')

console.log(emp.name);

// generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,4,5]);
let strArray = getArray<string>(['satu', 'dua', 'tiga']);

console.log(numArray, strArray);


numArray.push(12)
console.log(numArray);







