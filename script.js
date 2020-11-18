//SOLUTION 1
var uniqueInOrder=function(iterable){
    let resultArray= [];
    if(iterable.length == 0){
        return resultArray;
    }

    resultArray.push(iterable[0]);
    let currentChar = iterable[0];

    for(let i=0; i <iterable.length; i++){
        for(j=i; j<iterable.length; j++){
            if(currentChar != iterable[j]){
                i=j;
                currentChar= iterable[j];
                resultArray.push(iterable[j]);
            }
        }
    }
    return resultArray;
}

console.log(uniqueInOrder('AAABBBCCCDDDEEE'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder('11223333445122'));
console.log(uniqueInOrder(''));


//SOLUTION 2
var uniqueInOrder2=function(iterable){
    let resultArray = [];
    for(let i=0; i <iterable.length; i++){
            if(iterable[i] != iterable[i+1]){
                resultArray.push(iterable[i]);
            }
    }
    return resultArray;
}

console.log(uniqueInOrder2('AAABBBCCCDDDEEE'));
console.log(uniqueInOrder2('ABBCcAD'));
console.log(uniqueInOrder2('11223333445122'));
console.log(uniqueInOrder2(''));

