import { Operation } from "rsql-builder";
import {Injectable} from '@angular/core';
import { and, comparison, eq, le, ge, inList, or } from "rsql-builder";
import ne from 'rsql-builder/dist/ne';

@Injectable({
    providedIn: 'root'
})
export class RSQLUtils {
    constructor() { }

    public manageWildcard(value: any, field: string): string {
        let searchString = '';
        if (!!value) {
            if (this.hasWildcard(value)) {
                searchString = and(comparison(field, new Operation(value.replace(/%/g, '*'), '==')));
            } else {
                searchString = and(comparison(field, eq(value)));
            }
        }
        return searchString;
    }

    public manageSelect(value: any, field: string): string {
        let searchString = '';
        if (!!value) {
            searchString = and(comparison(field, eq(value)));
        }
        return searchString;
    }

    public manageBooleanSelect(value: any, field: string): string {
        let searchString = '';
        if (!!value || (typeof (value) === 'number' && (value === 0 || value === 1))) {

            if (value === 1) {
                searchString = and(comparison(field, eq(value)));
            }
            if (value === 0) {
                searchString = or(comparison(field, eq(value)), field.concat('=isnull=null'));
            }
        }
        return searchString;
    }

    public manageIn(values: any[], field: string): string {
        let searchString = '';
        if (!!values && values.length > 0) {
            searchString = field.concat('=in=(')
            values.forEach( v => {
                searchString = searchString.concat(v).concat(',');
            });
            searchString = searchString.substring(0, searchString.length - 1);
            searchString = searchString.concat(')');
        }
        return searchString;
    }

    public managerRange(value1: any, value2: any, field: string): string {
        let searchString = '';
        if (!!value1) {
            searchString = and(comparison(field, ge(value1)));
        }
        if (!!value2) {
            if (!!value1) {
                searchString = searchString.concat(';');
            }
            searchString.concat();
            searchString = searchString.concat(and(comparison(field, le(value2))));
        }
        return searchString;
    }

    private hasWildcard(val: string) {
        return (val.indexOf('%') !== -1);
    }

    public getSearchString(rSQLArrayInput: string []) {
        let searchString = '';

        const rSQLArray = rSQLArrayInput.filter(r => r !== '');
        if (!!rSQLArray && rSQLArray.length > 0 ) {
            searchString = searchString.concat(and(...rSQLArray));
        }

        if (!!searchString) {
            searchString = 'search='.concat(searchString);
        }
        return searchString;
    }
}
