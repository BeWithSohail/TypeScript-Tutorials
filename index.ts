// console.log("hello welcome to typescript ");

let a: number = 16;
// a = "sohail";
console.log(a);
let namePerson: String = "sohail";
console.log(namePerson);

let strings:string = "dfjsjdhjk";
console.log(strings);

let sales: number = 123_456_789;
let employee: string = "John";
let is_published: boolean = false;

console.log(employee, sales, is_published);

let undefinedd;

// The Any Type (this violates the rules of using typescripts)
let level;
level = 1;
level = "one";

//Arrays type in tyoescript

// let numbers = [1, 2, 3, "4"];
// let numbers: number[] = [1, 2, 3, "4"]; // it means we can't assign any other data types here as it is defined this array should accept only numbers type of value 
// console.log(numbers[3]);

//Tuples in Typescript 
let array1:[number,string,number] = [1,"2",3];
array1.forEach((item) => {
    console.log(item)
})

// Functions in TypeScript
// Let's learn how typescripts helps to prevent common problems when working with functions

// function calculateTax(income:number):string {
//     return "sohail";
// }
function calculateTax():string {
    return "sohail";
}

let finalValue = calculateTax();
console.log('function invokation called here', finalValue);

//Typescript using with objects

let employeeList: {
    id: number,
    name:number
} = {
    id:1,
    name:""
}
employeeList.name = "sohail";
console.log("employeeList", employeeList);


