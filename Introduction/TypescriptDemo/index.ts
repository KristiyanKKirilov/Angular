//static type set 
let helloMsg: string = "Hello, there"!;
let a: number = 4;
let b: number = 7;

let x: string | number | boolean = 5;
x = true;

let isAuthenticated: boolean = false;

const arr: number[] = [1, 2, 3, 4, 5];

console.log(arr.filter((n) => n > 3));

//interface example
interface User {
    name: string;
    age: number;
}

//type example
type User1 = {
    name: string;
    age: number;
}

const user: User = {
    name: "Tom",
    age: 20
};

const user1: User1 = {
    name: "Taam",
    age: 33
};

const users: User[] = [user, user1];
console.log(users);
users.forEach(u => console.log(u.name));

interface Human {
    firstName: string;
    lastName: string;
    age: number;
}
class Person implements Human {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getAgeMsg(): string {
        return `This human is ${this.age} y/o`
    }

    getDetails(): void {
        console.log(`Person details: ${this.firstName} ${this.lastName}`);
    }
}

const newPerson = new Person("Tom", "Harden", 30);
newPerson.getDetails();

class Student extends Person {
    grades: number[] = [6, 6, 6, 6];

    constructor(fName: string, lName: string, age: number){
        super(fName, lName, age);
    }
}

const newStudent = new Student("Steve", "Hobs", 28);
newStudent.getDetails();
console.log(newStudent.grades);

enum PaymentStatus{
    Failed = 100,
    Successful, 
    Pending,  
}

console.log("------------------");
console.log(PaymentStatus.Failed);

function checkPaymentStatus(paymentStatusCode: number):void{
    if(paymentStatusCode === 100){
        console.log("Failed payment");
    }
}

checkPaymentStatus(PaymentStatus.Failed);

