import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getAmericanItems(): Observable<AmericanVendor[]> {
    let url ="./assets/data/american.json";
    return this.httpClient.get<AmericanVendor[]>(url);
  }
  getIndianItems(): Observable<IndianVendor[]> {
    let url ="./assets/data/indian.json";
    return this.httpClient.get<IndianVendor[]>(url);
  }
  getMexicanItems(): Observable<MexicanVendor[]> {
    let url ="./assets/data/mexican.json";
    return this.httpClient.get<MexicanVendor[]>(url);
  }
}
