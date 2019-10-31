import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable, throwError } from 'rxjs';
import { MenuItem } from '../data/menu_item';
import { AddStatus } from '../data/addStatus';
import { tap, catchError } from 'rxjs/operators';
import { Cart } from '../data/cart';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    let url ="http://localhost:8080/CMS/api/cms/menu";
    return this.httpClient.get<MenuItem[]>(url);
  }
  
  getCart(userId: String): Observable<Cart[]> {
    let url ="http://localhost:8080/CMS/api/cms/getCart/"+userId;
    return this.httpClient.get<Cart[]>(url);
  }

  addToCart(value: MenuItem, userId:String): Observable<AddStatus[]> {
    //console.log("Object passing: ", userId);
      return this.httpClient.post<AddStatus[]>('http://localhost:8080/CMS/api/cms/order/addToCart/'+userId,value)
            .pipe(catchError(this.handleError)
  );
  }

  deleteItem(value: number, userId:String): Observable<Cart[]> {
    //console.log("Object passing: ", userId);
      return this.httpClient.post<Cart[]>('http://localhost:8080/CMS/api/cms/deleteItem/'+userId,value)
            .pipe(catchError(this.handleError)
  );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
   // console.log(t);
      
  
  
}
