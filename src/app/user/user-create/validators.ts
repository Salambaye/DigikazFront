import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomUserFormValidators {


    static typeValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value != 'studio' || value != 'apartment' || value != 'home') {
            return { invalidTitle: true }
        }
        return null;
    }

}