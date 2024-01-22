let lname :string;
lname = "Sanidhya";
// lname = 10;

let newname = lname.toUpperCase();
console.log(newname);

let age: number;

age = 25;
age = 25.5;

let dob = "25";
let result = parseInt(dob);

let isValid: boolean=false;

console.log(result);
console.log(isValid);

let emplist : string[];

let numList: Array<number>;

numList = [1,2,3,4,5,6,7,8]

let results = numList.find((num)=>num==2);
let num = numList.find((num)=>num>2);

let sum = numList.reduce((acc,num)=>acc+num);

console.log(results);
console.log(sum);

//enum
const enum Color{
    Red,
    Green, 
    Blue
}

let c: Color = Color.Blue;

let swapNumbs: [number,number];

function swapNumbers(num1:number,num2:number):[number,number]{
    return [num2,num1];
}

swapNumbs = swapNumbers(10,20);


console.log(swapNumbs[0]);
console.log(swapNumbs[1]);

let department: any;

department="IT";
department=10;