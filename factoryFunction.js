// factory function
function createRect(){

    const rectangle = {

        length: 1,
        breadth: 3,

        draw(){
            console.log("Drawing")
        }

    }

    return rectangle;

}

let rect1 = createRect();
