"use strict";
//union type example
// type IdFieldType = number | string;
const signContract = (employee) => {
    console.log("Contract signed by " + employee.name + " with email: " + employee.email);
};
signContract({
    name: "Tom",
    creditScore: 400,
    id: 12,
    email: "tomson@mail.com"
});
