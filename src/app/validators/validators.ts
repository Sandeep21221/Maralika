import { FormGroup } from '@angular/forms';

  // FORM GROUP VALIDATORS
export function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let cnf_password = group.controls[confirmPasswordKey];

    if (password.value !== cnf_password.value) {
    return {
        mismatchedPasswords: true
    };
    }
};
}
