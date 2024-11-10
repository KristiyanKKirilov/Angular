interface UserInterface {
    id: number;
    name: string;
    age?: number;
}; 

const User: UserInterface = {
    id: 1,
    name: "Tom",
};

User.age = 10;


if(!User.age){
    console.log("no age entered.");
}
else{
    console.log(User.age);
}
