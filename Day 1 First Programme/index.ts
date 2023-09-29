console.log("hello");


// let num = 15; // right now ts is using infers which means it automatically detecting that this num variable will take number as a value 

let num:number = 15;
console.log(num);

// now we can do this 
num = 20;
console.log(num);



// but we cant do because typescript is all about static checking 
// num = 'Hello'; // Type 'string' is not assignable to type 'number'
// console.log(num);

