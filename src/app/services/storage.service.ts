import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getFilters(key: string) {
    return  localStorage.get(key);
  }

  public clearFilters(key: string) {
    localStorage.removeItem(key);
  }

  public storeFilters(key: string, filter: any) {
    localStorage.setItem(key, JSON.stringify(filter));
  }
}
