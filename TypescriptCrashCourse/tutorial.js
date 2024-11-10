"use strict";
;
const User = {
    id: 1,
    name: "Tom",
};
User.age = 10;
if (!User.age) {
    console.log("no age entered.");
}
else {
    console.log(User.age);
}
