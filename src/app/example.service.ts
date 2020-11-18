import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ExampleService {

  constructor(private httpClient: HttpClient) { }

  getUsers(nbUser: number): Observable<any>{
    return this.httpClient.get('https://randomuser.me/api/?results='+nbUser);
  }
}
