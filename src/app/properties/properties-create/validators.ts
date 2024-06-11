import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomPropertyFormValidators {


    static titleValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value.length > 255) {
            return { invalidTitle: true }
        }

        return null;
    }

    static descriptionValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value.length < 10) {
            return { invalidBody: true }
        }

        return null;
    }

    static priceValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value <= 0 || value > 9999) {
            return { invalidTitle: true }
        }

        return null;
    }

}