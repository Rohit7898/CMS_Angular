import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AcceptService {

  constructor(private httpClient: HttpClient) { }
  
  getAcceptOrdersItems(): Observable<AcceptOrder[]> {
    let url = "http://localhost:8080/CMS/api/training/req/vend/check/3401";
    return this.httpClient.get<AcceptOrder[]>(url);
  }
  deletetAcceptOrdersItems(accetor:AcceptOrder): Observable<{}> {
    
    let url = "http://localhost:8080/CMS/api/training/acc/req/check/high/3401";
    
    return this.httpClient.put(url,accetor);
  }
  deleteOrdersItems(oid1: number): Observable<{}>
  {
    let url = "http://localhost:8080/CMS/api/training/newdel/vend/3401/"+oid1;
    return this.httpClient.delete(url);

  }

  calculatebalance():Observable<any>
  {
    let url = "http://localhost:8080/CMS/api/training/check/bal/3401";
    return this.httpClient.get(url);
      
  }
}
