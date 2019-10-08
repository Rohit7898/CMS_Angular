import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndianprofileService {
  constructor(private httpClient: HttpClient) { }

  getindian(): Observable<indianprofile[]> {
    return this.httpClient.get<indianprofile[]>("./assets/data/indianprofile.json");
  }
}