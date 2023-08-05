// constructor function consists of properties and methods/functions
// constructor function
function Rectangle(){

    this.length= 10
    this.breadth= 20

    this.write = function()
    {
        console.log("writing");
    }

}

const rect1 = new Rectangle();
rect1.color = "yellow";
delete rect1.color 

console.log(rect1);

// this is an inbuilt constructor of constructors we create
// internally constructor work this way 
const Rectangle1 = new Function('length', 'breadth', `

    this.length = length,
    this.breadth = breadth

    this.write = function()
    {
        console.log("writing");
    }`
    
    )


const rect = new Rectangle1(5,3);
console.log(rect);
console.log(rect.write())
