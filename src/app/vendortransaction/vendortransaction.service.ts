import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendortransactionService {

  constructor(private httpClient: HttpClient) { }

  getVenTransac(): Observable<Ventrans[]> {
    let url ="http://localhost:8080/CMS/api/training/hist/vend/check/3401";
    return this.httpClient.get<Ventrans[]>(url);
  }
}
