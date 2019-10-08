import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeetransactionService {

  constructor(private httpClient: HttpClient) { }

  getEmpTransac(): Observable<Emptrans[]> {
    let url ="./assets/data/Emptrans.json";
    return this.httpClient.get<Emptrans[]>(url);
  }

}
