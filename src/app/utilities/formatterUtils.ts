import { Injectable } from '@angular/core';
import moment from 'moment-es6';
import { get} from 'lodash';

@Injectable({
	providedIn: 'root'
})
export class FormatterUtils {

	readonly INPUT_DATE_PATTERN = 'YYYY-MM-DD';
	readonly OUPTU_DATE_PATTERN = 'YYYY-MM-DD';

	readonly INPUT_DATETIME_PATTERN = 'YYYY-MM-DD HH:mm:ss';
	readonly OUPTU_DATETIME_PATTERN = 'YYYY-MM-DD HH:mm:ss';

	constructor() { }

	public formatDate(rowData: any, field?: string): string {
		let val = null;
		if (!!field) {
			val = get(rowData, field);
		} else {
			val = rowData;
		}
		if(!!val) {
			return moment(val, this.INPUT_DATE_PATTERN).format(this.OUPTU_DATE_PATTERN);
		}
		return null;
	}

	public formatDateTime(rowData: any, field?: string): string {
		const result = this.format(this.INPUT_DATETIME_PATTERN, this.OUPTU_DATETIME_PATTERN, rowData, field);
		console.log(result);
		return result;
	}

	private format(inputPattern: any, outputPatter: any,  rowData: any, field?: string): string {
		let val = null;
		if (!!field) {
			val = get(rowData, field);
		} else {
			val = rowData;
		}
		if(!!val) {
			return moment(val, inputPattern).format(outputPatter);
		}
		return null;
	}

	public dateToString(date: any): string {
		if (!!date) {
			return date.year + '-' + this.leftpad(date.month, 2) + '-' + this.leftpad(date.day, 2);
		}
		return null;
	}

	public dateToStringWithTime(date: any, end?: boolean): string {
		let hour = '.00:00:00';
		if (!!end) {
			hour = '.23:59:59';
		}
		if (!!date) {
			return date.year + '-' + this.leftpad(date.month, 2) + '-' + this.leftpad(date.day, 2) + hour;
		}
		return null;
	}

	public getNestedProperty(rowData: any, field: string): string {
		return get(rowData, field);
	}

	public getBooleanAsString (data: any, field: string): string {
		const val = get(data, field);
		return ( !!val ? 'SI' : 'NO');
	}

	public getStringAsBoolean (val: any): number | null {
		if ( !!val && val === 'SI') {
			return 1;
		}
		if ( !!val && val === 'NO') {
			return 0;
		}
		return null;
	}

	private leftpad(val, resultLength = 2, leftpadChar = '0'): string {
		return (String(leftpadChar).repeat(resultLength)
			+ String(val)).slice(String(val).length);
	}

	private hasWildcard(val: string) {
		return (val.indexOf('%') !== -1);
	}

	getValueForDateinDatePickerFormat(data: string) {
		const d = new Date(data);
		return {year: d.getFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate()};
	}
}


