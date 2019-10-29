import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AmericanProfileService {
  constructor(private httpClient: HttpClient) { }

  getamerican(): Observable<americanprofile[]> {
    let url ="http://localhost:8080/CMS/api/training/prof/vend/3401";
    return this.httpClient.get<americanprofile[]>(url);
  }
}