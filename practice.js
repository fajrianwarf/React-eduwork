const listBuah = [ 
    'jeruk',
    'nenas', 
    'apel', 
    'semangka', 
    'anggur', 
    'alpukat', 
    'salak',
    'tongkol'
];

let arrayTengah = Math.floor(listBuah.length / 2);
// console.log(listBuah[arrayTengah]);

function fizzBuzz(value){
    for(i = 1; i <= value; i++){
    console.log(i)
    }
}

fizzBuzz(8)