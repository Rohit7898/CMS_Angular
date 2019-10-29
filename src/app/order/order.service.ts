import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../data/menu_item';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    let url ="http://localhost:8080/CMS/api/cms/menu";
    return this.httpClient.get<MenuItem[]>(url);
  }
  
}
