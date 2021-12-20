type operation = 'tambah' | 'kurang' | 'kali' | 'bagi';

type calcResult = number | string;

const calculator = (a: number, b: number, op: operation): calcResult => {
    if(op === 'tambah'){
        return a + b;
    } else if(op === 'kurang'){
        return a - b;
    } else if(op === 'kali'){
        return a * b;
    } else if(op === 'bagi'){
        if(b===0) throw new Error('Pembagi tidak boleh 0 !')
        return a / b;
    } else {
        throw new Error('Please input a valid operation')
    }
}
// console.log(calculator(8, 1, 'tambah'))
try {
console.log(calculator(8, 1, 'tambah'))
    
} catch (error: unknown) {
    let errorMessage: string = 'Opps.. Something Wrong';
    if(error instanceof Error){
        errorMessage += error.message
    }
    console.log(errorMessage)
}

console.log(process.argv, 'iniproces argv')