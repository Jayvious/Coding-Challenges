function perimeter(shape, y){
    let finalValue = (shape == 'c') ? y * 6.28 :  y * 4;
    return finalValue;
}

console.log(perimeter('s', 10));