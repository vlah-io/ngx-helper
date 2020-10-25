import {AbstractControl} from '@angular/forms';

export class FormHelper {
  /**
   * https://theinfogrid.com/tech/developers/angular/cool-password-validation-angular/
   */
  static passwordMatchValidator(control: AbstractControl): void {
    const password: string = control.get('password').value; // get password from our password form control
    const passwordConfirmation: string = control.get('passwordConfirmation').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== passwordConfirmation && password && passwordConfirmation) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('passwordConfirmation').setErrors({NoPasswordMatch: true});
    }
  }
}
