import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminactionService {

  constructor(private httpClient: HttpClient) { }

  getadminact(): Observable<adminact[]> {
    let url ="./assets/data/adddel.json";
    return this.httpClient.get<adminact[]>(url);
  }

  deleteadminact(id: number): Observable<{}>{
    let url ="./assets/data/adddel.json";
    const deleteUrl= `${url}/${id}`;
    return this.httpClient.delete(deleteUrl); 
  }

  updateadminact(adminacting: adminact): Observable<adminact> {

    let url ="./assets/data/adddel.json";  

    return this.httpClient.put<adminact>(url, adminacting);

  }
}
