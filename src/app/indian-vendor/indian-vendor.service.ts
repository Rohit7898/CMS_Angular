import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndianVendorService {

  constructor(private httpClient: HttpClient) { }

  getIndianItems(): Observable<IndianVendor[]> {
    let url ="./assets/data/indian.json";
    return this.httpClient.get<IndianVendor[]>(url);
  }

  deleteIndianItem(id: number): Observable<{}>{
    let url ="./assets/data/indian.json";
    const deleteUrl= `${url}/${id}`;
    return this.httpClient.delete(deleteUrl); 
  }

  updateIndianItem(indianVendor: IndianVendor): Observable<IndianVendor> {
    let url ="./assets/data/indian.json";  
    return this.httpClient.put<IndianVendor>(url, indianVendor);
  }

}
