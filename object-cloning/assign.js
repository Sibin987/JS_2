let srcRectangle = {
    length: 300,
    breadth: 200
}

let srcRectangle2 = {
    value: 25
}


let destRectangle;

destRectangle = Object.assign({sibin: 25},srcRectangle, srcRectangle2)
console.log(destRectangle)