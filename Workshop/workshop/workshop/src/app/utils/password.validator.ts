import { ValidatorFn } from "@angular/forms";

export function passwordValidator(): ValidatorFn{
    const regExp = new RegExp('[A-Za-z0-9]{5,}');
    return (control) => {
        const isInvalid = control.value === '' || regExp.test(control.value);
        return isInvalid ? null : {passwordValidator: true};
    };
}
