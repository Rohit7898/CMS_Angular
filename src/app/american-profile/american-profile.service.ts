import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AmericanProfileService {
  constructor(private httpClient: HttpClient) { }

  getamerican(): Observable<americanprofile[]> {
    return this.httpClient.get<americanprofile[]>("./assets/data/american-profile.json");
  }
}