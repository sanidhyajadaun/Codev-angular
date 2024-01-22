"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import * as alias_name from './interface';
class Employee {
    constructor(id, name, address) {
        this.id = id;
        this.address = address;
        this.name = name;
    }
    Login() {
        return { name: "John", id: 1, email: "" };
    }
    //adding methods
    getNameWithAddress() {
        return '$(this.name} stays at ${this.address}';
    }
}
let john = new Employee(1, "John", "Hughway71");
// john.id=1;
// john.name="san";
// john.address="hjjfjfjf";
//calling methods
let address = john.getNameWithAddress();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
        return '${this.name} is a manager at ${this.address}';
    }
}
let adress = john.getNameWithAddress();
console.log(john);
console.log(address);
