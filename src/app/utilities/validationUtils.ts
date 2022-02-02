import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export enum ComparisonType{
    EQUALS, BEFORE, AFTER
}

export function dateValidator(type:ComparisonType, dateGetter:()=>Date ):ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        let isValid = false
        const value:Date = control.value
        try{
            switch (type) {
                case ComparisonType.EQUALS:{
                     isValid = value == dateGetter()
                     break
                }
                case ComparisonType.BEFORE:{
                  isValid = value < dateGetter()
                  break
                }
                case ComparisonType.AFTER:{
                  isValid = value > dateGetter()
                  break
                }
        }
      } finally{
        return isValid ? {dateNotValid: control.value} : null
      }
    };
  }