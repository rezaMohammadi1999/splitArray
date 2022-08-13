
function generateNumber(count) {
    let arr=[];
    for (let counter = 0; counter <= count ; counter++) {
        arr.push(counter);
    }
    return arr;
}

function splitArray(array) {
    let length=array.length;
    let part=parseInt(length/3);
    let part1=array.slice(0,part);
    let part2=array.slice(part,part*2);
    let part3=array.slice(part*2,length);

    return [...part2,...part3,...part1];
    // return [part2,part3,part1];
}

console.log(splitArray(generateNumber(10)));