import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IndiantransactionService {

  constructor(private httpClient: HttpClient) { }


  getindTransac(): Observable<intrans[]> {
    let url ="http://localhost:8080/CMS/api/training/hist/vend/check/3402";
    return this.httpClient.get<intrans[]>(url);
  }

}
