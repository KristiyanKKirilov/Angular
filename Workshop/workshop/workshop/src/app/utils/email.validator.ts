import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]):ValidatorFn{
    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9._ ]{6,}@gmail.(${domainString})`);

    return (control) => {
        const isInvalid = control.value === '' || regExp.test(control.value);
        return isInvalid ? null: {emailValidator: true};
    }
}
