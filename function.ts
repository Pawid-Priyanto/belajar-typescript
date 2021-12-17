function sum(a: number, b: number): number {
  let total: number = a + b;
  return total;
}

console.log(sum(10, 98));

function printFullName(str1: string, str2: string): string {
  return `${str1} ${str2}`;
}

console.log(printFullName("Pawit", "Priyanto"));

function makeTable(num: number) {
  let result: number = 0;
  for (let i: number = 1; i <= num; i++) {
    for (let j: number = 1; j <= num; j++) {
      result = i * j;
      console.log(result);
    }
  }
}

makeTable(12);

function log(msg: string | number): void{
  console.log(msg);
}

log('hallo')