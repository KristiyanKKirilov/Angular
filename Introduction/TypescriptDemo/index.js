var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(fName, lName, age) {
        var _this = _super.call(this, fName, lName, age) || this;
        _this.grades = [6, 6, 6, 6];
        return _this;
    }
    return Student;
}(Person));
var newStudent = new Student("Steve", "Hobs", 28);
newStudent.getDetails();
console.log(newStudent.grades);
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus[PaymentStatus["Failed"] = 100] = "Failed";
    PaymentStatus[PaymentStatus["Successful"] = 101] = "Successful";
    PaymentStatus[PaymentStatus["Pending"] = 102] = "Pending";
})(PaymentStatus || (PaymentStatus = {}));
console.log("------------------");
console.log(PaymentStatus.Failed);
function checkPaymentStatus(paymentStatusCode) {
    if (paymentStatusCode === PaymentStatus.Failed) {
        console.log("Failed payment");
    }
    else if (paymentStatusCode === PaymentStatus.Successful) {
        console.log("Successful payment");
    }
}
checkPaymentStatus(101);
function getIdentity(id) {
    console.log("The type of the id is ".concat(typeof id));
}
getIdentity(newStudent);
