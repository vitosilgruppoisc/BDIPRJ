import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {CountryCodeForNscRuleValidationEnum} from "../models/enum";

export function eccTranscodingRetailNscValidator(): ValidatorFn {

    return (form: FormGroup): ValidationErrors | null => {

        const nsc = form.controls['nsc'];
        const countryCode = form.controls['countryCode'];

        if (!!nsc && !!nsc.value) {
            let pattern = '^[0-9%]{10}$';
            if (!!countryCode && !!countryCode.value && Object.values(CountryCodeForNscRuleValidationEnum).includes(countryCode.value) ) {
                pattern = '^[0-9%]{5}([0-9%]{5}|[*])$';
            }
            if (!new RegExp(pattern).test(nsc.value)) {
                nsc.setErrors({pattern: true});
            }
        }
        return;
    };
}
