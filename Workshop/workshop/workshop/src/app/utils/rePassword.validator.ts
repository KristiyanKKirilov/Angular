import { ValidatorFn } from "@angular/forms";

export function rePasswordValidator(password: string): ValidatorFn{
    return (control) => {
        const isInvalid = control.value === '' || control.value === password;
        return isInvalid ? null: {rePasswordValidator: true};
    }
}
