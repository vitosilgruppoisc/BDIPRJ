import {FormControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {FormatterUtils} from "../utilities/formatterUtils";

export function dateValidator(pairToCompare: any []): ValidatorFn {

    return (form: FormGroup): ValidationErrors | null => {

        const formatterUtils = new FormatterUtils();

        pairToCompare.forEach( p => {

            const field1 = form.controls[p.field1];
            if (!!field1) {
                field1.setErrors(null);

                if (!!p.required1 && !field1.value) {
                    field1.setErrors ({ required: true });
                }

                if (!!field1.value) {
                    if (typeof  field1.value === 'string' || !checkDateFormat(field1.value)) {
                        field1.setErrors({ dateformat: true });
                    }

                    const d1 = new Date(formatterUtils.dateToString(field1.value));
                    if (!!p.minDate1) {
                        const minDate1 = new Date(formatterUtils.dateToString(p.minDate1));
                        if (d1 <  minDate1) {
                            field1.setErrors({ mindate: true });
                        }
                    }

                    if (!!p.maxDate1) {
                        const maxDate1 = new Date(formatterUtils.dateToString(p.maxDate1));
                        if (d1 >  maxDate1) {
                            field1.setErrors({ maxdate: true });
                        }
                    }
                }
            }

            const field2 = form.controls[p.field2];
            if (!!field2) {
                field2.setErrors(null);

                if (!!p.required2 && !field2.value) {
                    field2.setErrors ({ required: true });
                }

                if (!!field2.value) {
                    if (typeof field2.value === 'string'  || !checkDateFormat(field2.value)) {
                        field2.setErrors({dateformat: true});
                    }

                    const d2 = new Date(formatterUtils.dateToString(field2.value));
                    if (!!p.minDate2) {
                        const minDate2 = new Date(formatterUtils.dateToString(p.minDate2));
                        if (d2 < minDate2) {
                            field2.setErrors({mindate: true});
                        }
                    }

                    if (!!p.maxDate2) {
                        const maxDate2 = new Date(formatterUtils.dateToString(p.maxDate2));
                        if (d2 > maxDate2) {
                            field2.setErrors({maxdate: true});
                        }
                    }
                }
            }

            if (!!field1 && !!field1.value && !!field2 && !!field2.value) {

                const d1 = new Date(formatterUtils.dateToString(field1.value));
                const d2 = new Date(formatterUtils.dateToString(field2.value));
                if ( d1 > d2 ) {
                    field1.setErrors({ daterange: true });
                    field2.setErrors({ daterange: true });
                }
            }
        });

        return;
    };

}


function checkDateFormat(val: any) {
    if (!val.year || val.year < 1000) {
        return false;
    }
    if (!val.month || val.month > 12 || val.month < 1) {
        return false;
    }
    if (!val.day || val.day > 31 || val.day < 1) {
        return false;
    }
    return true;
}

