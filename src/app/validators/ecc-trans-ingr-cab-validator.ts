import {FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormatterUtils} from "../utilities/formatterUtils";
import {TipoContoEccTranscodingIngrossoEnum, TipoVersoEnum} from "../models/enum";

export function eccTranscodingIngrossoVersoValidator(): ValidatorFn {

    return (form: FormGroup): ValidationErrors | null => {

        const verso = form.controls['verso'];
        const cab = form.controls['cab'];
        const tipoConto = form.controls['tipoConto'];

        if (!!cab && !!cab.value) {
            if (cab.value !== '0') {
                const pattern = '^[0-9%]{5}$';
                if (!new RegExp(pattern).test(cab.value)) {
                    cab.setErrors({pattern: true});
                }
            }
        }

        if (!!verso && !!verso.value && !!cab && !!cab.value && !!tipoConto && !!tipoConto.value) {
            //Vedi mail del 3/09 da Ernesto ricci con oggetto Constraint su tabella ECC_INGROSSO
            if ( !(
                (cab.value === '0') ||
                (verso.value === TipoVersoEnum.AB.valueOf() && tipoConto.value === TipoContoEccTranscodingIngrossoEnum.RTGS.valueOf())
            )) {
                cab.setErrors({ ruleCab: true});
            }
        }
        return;
    };
}



