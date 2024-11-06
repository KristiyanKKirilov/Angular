//static type set 
var helloMsg = "Hello, there";
var a = 4;
var b = 7;
var x = 5;
x = true;
var isAuthenticated = false;
var arr = [1, 2, 3, 4, 5];
console.log(arr.filter(function (n) { return n > 3; }));
var user = {
    name: "Tom",
    age: 20
};
var user1 = {
    name: "Taam",
    age: 33
};
var users = [user, user1];
console.log(users);
users.forEach(function (u) { return console.log(u.name); });
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getAgeMsg = function () {
        return "This human is ".concat(this.age, " y/o");
    };
    Person.prototype.getDetails = function () {
        console.log("Person details: ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Person;
}());
var newPerson = new Person("Tom", "Harden", 30);
newPerson.getDetails();
