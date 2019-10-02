import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcceptService {

  constructor(private httpClient: HttpClient) { }
  
  getAcceptOrdersItems(): Observable<AcceptOrder[]> {
    let url = "./assets/data/requests.json";
    return this.httpClient.get<AcceptOrder[]>(url);
  }
  deletetAcceptOrdersItems(name: string): Observable<{}> {
    let url = "./assets/data/requests.json";
    const deleteUrl = `${url}/${name}`;
    return this.httpClient.delete(deleteUrl);
  }
  updatetAcceptOrdersItems(acceptOrders: AcceptOrder): Observable<AcceptOrder>
  {
    let url = "./assets/data/requests.json";
    return this.httpClient.put<AcceptOrder>(url, acceptOrders);

  }
}
