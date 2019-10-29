import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginData } from '../data/login-data';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient){}

    getLoginData(username: String, password:String):Observable<LoginData>{
        let url="http://localhost:8080/CMS/api/cms/login/"+username+"/"+password;
        console.log(url);
        return this.httpClient.get<LoginData>(url);
    }
    getLoginDataV(username: String, password:String):Observable<LoginData>{
      let url="http://localhost:8080/rest-test/api/rms/loginV/"+username+"/"+password;
      console.log(url);
      return this.httpClient.get<LoginData>(url);
  }
}
