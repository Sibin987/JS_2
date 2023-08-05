let a = {value: 10};
let b = a;

a.value++;

console.log(a.value);
console.log(b.value);

// pass by reference example

let c = {value: 20};

function inc(c)
{
    c.value++;
}

inc(c);
console.log("pass by reference example")
console.log(c);