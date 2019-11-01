import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmericanVendorService {

  constructor(private httpClient: HttpClient) { }

  getAmericanItems(): Observable<AmericanVendor[]> {
    let url ="http://localhost:8080/CMS/api/training/tid/3401";
    return this.httpClient.get<AmericanVendor[]>(url);
  }

  deleteAmericanItem(id: number): Observable<{}>{
    let url ="http://localhost:8080/CMS/api/training/del/vend/3401/"+id;
    
    return this.httpClient.delete(url); 
  }

  addAmericanItem(america:amvend): Observable<AmericanVendor[]>{
    
    let url ="http://localhost:8080/CMS/api/training/add/newvend/3401";
    
    return this.httpClient.post<AmericanVendor[]>(url,america); 
  }

  updateAmericanItem(americanVendor: AmericanVendor): Observable<AmericanVendor[]> {
    let url ="http://localhost:8080/CMS/api/training/wiiin/upd/3401/"+americanVendor.itemId+"/"+americanVendor.itemPrice+"/"+americanVendor.itemName;  
    return this.httpClient.put<AmericanVendor[]>(url,americanVendor);
  }
}
