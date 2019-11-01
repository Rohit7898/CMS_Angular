import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndianVendorService {

  constructor(private httpClient: HttpClient) { }

  getIndianItems(): Observable<IndianVendor[]> {
    let url ="http://localhost:8080/CMS/api/training/tid/3402";
    return this.httpClient.get<IndianVendor[]>(url);
  }

  deleteIndianItem(id: number): Observable<{}>{
    let url ="http://localhost:8080/CMS/api/training/del/vend/3402/"+id;
    
    return this.httpClient.delete(url); 
  }
   
  addIndian(america:indvend): Observable<IndianVendor[]>{
    
    let url ="http://localhost:8080/CMS/api/training/add/newvend/3402";
    
    return this.httpClient.post<IndianVendor[]>(url,america); 
  }
  

  updateIndianItem(indianVendor: IndianVendor): Observable<IndianVendor[]> {
    let url ="http://localhost:8080/CMS/api/training/wiiin/upd/3402/"+indianVendor.itemId+"/"+indianVendor.itemPrice+"/"+indianVendor.itemName;  
    return this.httpClient.put<IndianVendor[]>(url, indianVendor);
  }

}
