//static type set 
let helloMsg: string = "Hello, there"!;
let a: number = 4;
let b: number = 7 ;

let x: string | number | boolean = 5;
x = true;

let isAuthenticated: boolean = false;

const arr: number[] = [1,2,3,4,5];

console.log(arr.filter((n) => n > 3));

//interface example
interface User{
    name: string;
    age: number;
}

//type example
type User1 = {
    name:string;
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
