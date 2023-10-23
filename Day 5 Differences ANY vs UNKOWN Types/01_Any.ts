// let myAnyVariable = 4; // right now type is number
// myAnyVariable = "Jay" // error string is not assignable to type number 

// but if i use any i can do above task 

let myAnyVariable:any = 4; // right now type is any
myAnyVariable = "Jay" // this is working fine because any will disable type safety and type checking 
myAnyVariable = true // this is working fine because any will disable type safety and type checking 
