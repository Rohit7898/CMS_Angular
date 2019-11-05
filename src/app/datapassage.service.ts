import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatapassageService {
  message: object;

  constructor() { }
  sendMessage(mes:object){
    this.message = mes;
  }
}
 