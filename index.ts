 let name: string; // Only strings data type is assignable here : (Types:String)
  let age: number; // Only number data types assignable here  :  (Types:Number)
  let istrue: boolean; // Only boolean data types assignable here : (Types:boolean)
  let arrays: number[]; // That means this arrays should accept only number type  : (Types:array of a number)
  let role: [number, string]; // it means this are going to accept only types of  : (Types:array of a number and strings (Tuples))
  // number and strings, this only contains two value here (Example of Tuples)
  let address: string | number; // This is a example of union which means we can assign here number and strings as well : (Types:value of a number and strings (Union))


  // Here we have created a object called person and assigned it a value of =>
  // Person which means that Person keyboard, value pair is going to accept that =>
  // data type which is defined in type Person; (ex, name is going to contains the data type string and age is number )
  // Also must defined both value otherwise this will throw an error
  // if we have to define only one value or miss some value then defined a ? mark next to the key eg:-(age?)
  //
  type Person = {
    name: string;
    age: number;
  };

  let person: Person = {
    name: 'John',
    age: 25
  };
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


