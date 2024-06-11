import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomPostFormValidators {

    static userIdValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (isNaN(value) || value < 1 || value > 99999) {
            return { invalidUserId: true }
        }
        return null;
    }

    static titleValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value.length > 255) {
            return { invalidTitle: true }
        }

        return null;
    }


    static bodyValidator(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value.length < 10) {
            return { invalidBody: true }
        }

        return null;
    }



}