function stringMessage(string) {
    if (string) {
        return "The string is not empty";
    } else {
        return "It's an empty string";
    }
}

console.log(stringMessage("honey badger"));
console.log(stringMessage(""));

let a = [8, 17, 42, 99];
console.log(a.sort());  //  [ 17, 42, 8, 99 ]

function numberCompare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

console.log(a.sort(numberCompare));
[ 8, 17, 42, 99 ]


// traditional function syntax
function square(num){
    return num * num;
}

// 'big arrow' function syntax
let altSquare = (num) => {
    return num * num;
}

console.log(square(3));
console.log(altSquare(4));