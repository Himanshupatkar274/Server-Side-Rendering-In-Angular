import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/todos'
  callDummyMethod() {
    return new Promise((resolve, reject) => {
      console.log('Dummy method called');
      this.http.get(this.url).toPromise().then((response)=>{
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  }
}
