console.log("hello")

const rectangle = {
    length: 1,
    breadth: 2,

    // creating function under object is called method
    draw: function(){
        console.log('draw')
    }

}

// console.log(rectangle.length)
// console.log(rectangle.draw())

// factory function used to create objects
// 1) create objects
// 2) return it
function createRectangle() {

    const rectangle = {
        // length: 1,
        // breadth: 2,
    
        // creating function under object is called method
        //draw: function(){
       //     console.log('draw')
       // },

        draw(){
            console.log('draw')
        }
    
    };

    return rectangle;

}

let rect1 = createRectangle();
let rect2 = createRectangle();


function createSquare() {

    return square = {

        label(){
            console.log("label")
        }

    }

}

let square1 = createSquare();
let square2 = createSquare();