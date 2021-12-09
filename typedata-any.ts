let obj: any = { name: "fahmi" };

let x: any = obj.name;
console.log(x); // return fahmi

obj.val = 123;

let p: any = obj.val; // return 123
console.log(p);

let y: any = obj;
console.log(y);

// type data null & undefined
let firstName: null = null;
let why: undefined = undefined;

console.log(firstName);
console.log(why);

// type data void
function printHello(str: string): void {
  console.log(`Hello ${str}`);
}

printHello("jaka");

function infiniteLoop(): never {
  while (true) {
    console.log("hai");
  }
}

infiniteLoop();
