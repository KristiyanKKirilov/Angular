"use strict";
//type annotation
let id = 5;
let company = "Acme corporation";
let isPublished = true;
let ids = [1, 2, 3, 4, 5];
let x = "probably";
let xArr = ["probably", 0, true];
let yArr = [x, id, isPublished];
const concatenateValues = (a, b) => {
    return a + b;
};
console.log(concatenateValues("Hello", " world"));
console.log(concatenateValues("5", "10"));
