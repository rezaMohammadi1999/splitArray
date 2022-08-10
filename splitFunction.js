function generateNumber(count){
    let arr=[];
    for (let i = 0; i <= count; i++) {
        arr.push(i)
    }
    return arr;
}

// console.log(generateNumber(5));

function splitArray(array) {
    let lengthArray= array.length;
    let part  = parseInt(lengthArray/3);
    let part1 = array.slice(0,part);
    let part2 = array.slice(part,part*2);
    let part3 = array.slice(part*2,lengthArray);

    return [...part2,...part3,...part1];
}
console.log(splitArray(generateNumber(9)));
