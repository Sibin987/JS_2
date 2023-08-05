const rectangle = {
    length: 10,
    breadth: 20
}

// for of loop
// for(let key of Object.keys(rectangle)){

//     console.log(key, rectangle[key]);

// }

// use to check presence of properties
if('color' in rectangle){
    console.log("Present");
}
else{
    console.log("Absent")
}