import { MessageService } from './message.service';
import { User } from './user/user.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


const USERS: User[] = [];

@Injectable({
  providedIn: 'root'
})

export class UserService {

  selectedUser = new BehaviorSubject({id: null, name: null});

  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient, private messageService: MessageService) { }

  getUsers(): Observable<any> {
    return this._http.get<any>('https://randomuser.me/api/?results=10').pipe(map(data => data.results));
  }

  selectUser(user: User): void{
    this.selectedUser.next(user);
  }

  getUser(id: number): Observable<User>{
    return of(USERS.find(user => user.id.value === id));
  }

}
