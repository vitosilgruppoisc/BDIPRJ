import { Injectable } from '@angular/core'; 


@Injectable({
    providedIn: 'root'
})
export class FilterUtils{


	getFilters(gridOptions:any) {

		let array : Array<any> = [];
		gridOptions.api.forEachNodeAfterFilterAndSort(function(node:any) {
			array.push(node.data);
		});
		
		let newFilters = [];
		array.forEach(keys => {
			let idfiltrato: string = keys.id;
			if (idfiltrato != null || idfiltrato != undefined) {
				newFilters.push({ 'id': idfiltrato });
			}
		});

		return array;
	}

}


