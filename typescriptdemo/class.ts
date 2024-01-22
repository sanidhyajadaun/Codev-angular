import { Login,User } from "./interface";

//import * as alias_name from './interface';


class Employee implements Login{
    id!:number;
    
    protected name!:string;
    address!:string;
    constructor(id:number,name:string,address:string){
        this.id=id;
        this.address=address;
        this.name = name;
    }

    Login(): User {
        return {name:"John",id:1,email:""};
    }

    //adding methods
    getNameWithAddress(): string{
        return '$(this.name} stays at ${this.address}';
    }
}


let john = new Employee(1,"John","Hughway71");
// john.id=1;
// john.name="san";
// john.address="hjjfjfjf";

//calling methods
let address = john.getNameWithAddress();

class Manager extends Employee{
    constructor(id:number,name:string,address:string)
    {    
        super(id,name,address);
    }

    getNameWithAddress(): string {
        return '${this.name} is a manager at ${this.address}';
    }
}

let adress = john.getNameWithAddress();
console.log(john);
console.log(address);