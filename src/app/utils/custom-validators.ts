import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  
  public static isAutocompleteValue = (autocompleteValues: string[]): ValidatorFn => {
    return (control: AbstractControl): ValidationErrors | null => {
      const valid = autocompleteValues.find((value) => value.toLowerCase() === control.value.toLowerCase());
      return valid ? null : { isAutocompleteValue: control.value };
    };
  }

}