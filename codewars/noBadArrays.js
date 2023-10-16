function noBadArray(input) {
    if(input.length <=1) return input;
    
    let array = [input[0]]
    
    for(let i=1; i<input.length; i++) {
        if(input[i] !== input[i - 1]) {
            array.push(input[i])
        } 
    }
    
    return array;
}

function noBadArray(input) {
    return input.filter((value, index, array) => value !== array[index - 1]);
}