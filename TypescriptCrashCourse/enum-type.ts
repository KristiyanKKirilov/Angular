enum LoginError {
    Unauthorized = "unauthorized",
    NoUser = "no user",
    WrongCredentials = "wrong credentials",
    Internal = "interal"


}

const printErrorMessage = (error: LoginError) => {
    if (error == LoginError.Unauthorized) {
        console.log("Unauthorized user");
    } else if (error == LoginError.NoUser) {
        console.log("User doesn't exists");
    } else if (error == LoginError.WrongCredentials) {
        console.log("Wrong username or password");
    } else {
        console.log("Internal error");
    }
}

printErrorMessage(LoginError.Unauthorized);
