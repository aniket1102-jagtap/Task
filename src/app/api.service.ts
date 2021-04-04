import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // country: '1',
  })

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //  localUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private httpClient:HttpClient) { }

  public getrecords(): Observable<any> {

    return this.httpClient.get<any>(`${environment.baseUrl}photos`, httpOptions)
      .pipe(map(user => {
        return user;
      }));
            
  }

}
