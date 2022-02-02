import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {CountryCodeForNscRuleValidationEnum, TipoFlagEnum} from "../models/enum";

export function eccReachabilityRetailBicValidator(): ValidatorFn {

    return (form: FormGroup): ValidationErrors | null => {

        const bicInput = form.controls['bicInput'];
        const raggiungibile = form.controls['raggiungibile'];


        if (!!bicInput && !!bicInput.value) {
            const pattern = '^([a-zA-Z]){6}([0-9a-zA-Z]){2}(([0-9a-zA-Z]{3})||([*]))?$';
            if (!new RegExp(pattern).test(bicInput.value)) {
                bicInput.setErrors({bicInputSyntax: true});
            }
        }

        if (!!raggiungibile && raggiungibile.value){

            if ( raggiungibile.value == TipoFlagEnum.SI ) {
                //modifica a valle di mail del 21/10
                /*const bicOutput = form.controls['bicOutput'];
                if (!bicOutput || !bicOutput.value) {
                    bicOutput.setErrors({required: true});
                }*/
                const bicDiretto = form.controls['bicDiretto'];
                if (!bicDiretto || !bicDiretto.value) {
                    bicDiretto.setErrors({required: true});
                }
            }
        }

        return;
    };
}
