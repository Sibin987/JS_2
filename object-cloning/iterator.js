let srcRectangle = {
    length: 100,
    breadth: 200
}

let destRectangle = {}

for(let key in srcRectangle)
{
    destRectangle[key] = srcRectangle[key];
}

console.log(destRectangle)