import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { rePasswordValidator } from '../utils/rePassword.validator';

@Directive({
    selector: '[appRePassword]',
    standalone: true,
    providers: [{
        provide: NG_VALIDATORS,
        multi: true,
        useExisting: RePasswordDirective,
    }]
})
export class RePasswordDirective implements Validator {
    @Input() appRePassword: string = '';
    constructor() { }
    validate(control: AbstractControl): ValidationErrors | null {
        const validatorFn = rePasswordValidator(this.appRePassword);

        return validatorFn(control);
    }

}
