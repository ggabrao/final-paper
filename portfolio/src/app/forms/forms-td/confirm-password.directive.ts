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

export const passwordCompareValidator: ValidatorFn = (
  c: AbstractControl
): ValidationErrors | null => {
  const password = c.get('password');
  const confirm = c.get('confirmPassword');

  if (password?.pristine || confirm?.pristine) {
    return null;
  }

  if (password?.value === confirm?.value) {
    return null;
  }
  return { passwordCompare: true };
};

@Directive({
  selector: '[frmConfirmPassword]',
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
