import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmericanVendorService {

  constructor(private httpClient: HttpClient) { }

  getAmericanItems(): Observable<AmericanVendor[]> {
    let url ="./assets/data/american.json";
    return this.httpClient.get<AmericanVendor[]>(url);
  }

  deleteAmericanItem(id: number): Observable<{}>{
    let url ="./assets/data/american.json";
    const deleteUrl= `${url}/${id}`;
    return this.httpClient.delete(deleteUrl); 
  }

  updateAmericanItem(americanVendor: AmericanVendor): Observable<AmericanVendor> {
    let url ="./assets/data/american.json";  
    return this.httpClient.put<AmericanVendor>(url, americanVendor);
  }
}
