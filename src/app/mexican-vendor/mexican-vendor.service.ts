import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MexicanVendorService {

  constructor(private httpClient: HttpClient) { }

  getMexicanItems(): Observable<MexicanVendor[]> {
    let url ="./assets/data/mexican.json";
    return this.httpClient.get<MexicanVendor[]>(url);
  }

  deleteMexicanItem(id: number): Observable<{}>{
    let url ="./assets/data/mexican.json";
    const deleteUrl= `${url}/${id}`;
    return this.httpClient.delete(deleteUrl); 
  }

  updateMexicanItem(mexicanVendor: MexicanVendor): Observable<MexicanVendor> {
    let url ="./assets/data/mexican.json";  
    return this.httpClient.put<MexicanVendor>(url, mexicanVendor);
  }
}
