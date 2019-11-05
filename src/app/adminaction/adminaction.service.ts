import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../data/Vendor';

@Injectable({
  providedIn: 'root'
})

export class AdminactionService {

  constructor(private httpClient: HttpClient) { }

  addvendor(value: Vendor): Observable<any> {
    console.log(value);
    return this.httpClient.post<any>("http://localhost:8080/CMS/api/cms/addVendor",value);
  }
  showVendor(): Observable<Vendor[]> {
    //console.log(value);
    return this.httpClient.get<Vendor[]>("http://localhost:8080/CMS/api/cms/showVendor");
  }

  deleteadminact(id: number): Observable<{}>{
    let url ="http://localhost:8080/CMS/api/cms/deleteVendor/"+id;
    //const deleteUrl= `${url}/${id}`;
    return this.httpClient.delete(url); 
  }

  updateadminact(adminacting: adminact): Observable<adminact> {

    let url ="http://localhost:8080/CMS/api/cms/editVendor";  

    return this.httpClient.put<adminact>(url, adminacting);

  }
}
