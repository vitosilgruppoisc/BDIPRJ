import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {CountryCodeForNscRuleValidationEnum, TipologiaRichiestaTrRaEnum} from "../models/enum";

export function transcodingReachabilityTipologiaValidator(): ValidatorFn {

    return (form: FormGroup): ValidationErrors | null => {

        const tipologia = form.controls['tipologia'];

        if (!!tipologia) {

            if (!!tipologia.value) {
                if (tipologia.value === TipologiaRichiestaTrRaEnum.NSC_CC.valueOf()) {
                    const nsc = form.controls['nsc'];
                    if (!nsc || !nsc.value) {
                        nsc.setErrors({required: true});
                    }
                    const countryCode = form.controls['countryCode'];
                    if (!countryCode || !countryCode.value) {
                        countryCode.setErrors({required: true});
                    }
                }

                if (tipologia.value === TipologiaRichiestaTrRaEnum.IBAN.valueOf()) {
                    const iban = form.controls['iban'];
                    if (!iban || !iban.value) {
                        iban.setErrors({required: true});
                    }
                }

                if (tipologia.value === TipologiaRichiestaTrRaEnum.BIC.valueOf()) {
                    const bic = form.controls['bic'];
                    if (!bic || !bic.value) {
                        bic.setErrors({required: true});
                    }
                }
            } else {
                tipologia.setErrors({required: true});
            }
        }
        return;
    };
}
