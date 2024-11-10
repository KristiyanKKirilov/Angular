"use strict";
var LoginError;
(function (LoginError) {
    LoginError["Unauthorized"] = "unauthorized";
    LoginError["NoUser"] = "no user";
    LoginError["WrongCredentials"] = "wrong credentials";
    LoginError["Internal"] = "interal";
})(LoginError || (LoginError = {}));
const printErrorMessage = (error) => {
    if (error == LoginError.Unauthorized) {
        console.log("Unauthorized user");
    }
    else if (error == LoginError.NoUser) {
        console.log("User doesn't exists");
    }
    else if (error == LoginError.WrongCredentials) {
        console.log("Wrong username or password");
    }
    else {
        console.log("Internal error");
    }
};
printErrorMessage(LoginError.Unauthorized);
