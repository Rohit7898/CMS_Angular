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
}
