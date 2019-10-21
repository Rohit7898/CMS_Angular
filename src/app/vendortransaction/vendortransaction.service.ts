import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendortransactionService {

  constructor(private httpClient: HttpClient) { }

  getVenTransac(): Observable<Ventrans[]> {
    let url ="./assets/data/ventrans.json";
    return this.httpClient.get<Ventrans[]>(url);
  }
}
