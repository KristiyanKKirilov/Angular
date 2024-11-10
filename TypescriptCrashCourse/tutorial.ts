interface UserInterface {
    id: number;
    name: string;
    age?: number;
    greet(message:string):void;
}; 

const User: UserInterface = {
    id: 1,
    name: "Tom",
    greet(message){
        console.log(message);
    },
};

User.age = 10;
User.greet("Hello");

if(!User.age){
    console.log("no age entered.");
}
else{
    console.log(User.age);
}
