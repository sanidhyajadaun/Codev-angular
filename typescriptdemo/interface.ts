export interface User{
    name: string;
    age?:number;
    id: number;
    email: string;
}

let {name:userName,email:userLogin}: User = {name:"John",id:1,email:""};

//userLogin="";
//object destructuring

// user.name;
// user.email;



interface Employees extends User{
    salary:number;
}

let employee: Employees={name:"John",id:1,email:"",salary:1000};

export interface Login{
    Login():User;
}

//array destructuring
let [user1,user2,...restusers]: User[] = [
    {name:"John1",id:1,email:""},
    {name:"John2",id:2,email:""},
    {name:"John3",id:3,email:""},
    {name:"John4",id:4,email:""},
];

console.log(user1);
console.log(user2);
console.log(restusers);

let result = restusers.filter(user=>user.id>3);