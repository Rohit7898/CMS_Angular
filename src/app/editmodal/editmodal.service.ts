import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../data/Vendor';
@Injectable({
  providedIn: 'root'
})
export class EditmodalService {

  constructor(private httpClient: HttpClient) { }
  updateadminact(vedit:Vendor): Observable<any> {
    console.log(vedit);
    return this.httpClient.put("http://localhost:8080/CMS/api/cms/editVendor",vedit);
  }
}
