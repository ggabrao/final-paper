import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  NgForm,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export const passwordCompareValidator: ValidatorFn = (c: AbstractControl): ValidationErrors | null => {
  const password = c.get('password');
  const confirm = c.get('confirmPassword');
  return password && confirm && password.value !== confirm.value ? { passwordCompare: true } : null;
};

@Directive({
  selector: '[appConfirmPassword]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPasswordDirective,
      multi: true,
    },
  ],
})
export class ConfirmPasswordDirective implements Validator {  

  validate(control: AbstractControl): ValidationErrors | null {
    return passwordCompareValidator(control);
  }
}
