import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MexicanprofileService {
  constructor(private httpClient: HttpClient) { }

  getmexican(): Observable<mexicanprofile[]> {
    return this.httpClient.get<mexicanprofile[]>("./assets/data/mexicanprofile.json");
  }
}