import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DomSanitizer } from '@angular/platform-browser';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: User[];

  selectedUser: User;

  constructor(private userService: UserService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log(this.users[0].name.first);
      });

    this.userService.selectedUser
      .subscribe( value => {

      });
  }

  onSelect(user: User): void{
    this.userService.selectUser(user);
    console.log(this.userService.selectUser(user));
    this.messageService.add(`User selectionner = ${user.name.first}`);
    this.selectedUser = user;

  }

  // tslint:disable-next-line: typedef
  debug(){
    console.log(this.users);
  }

}
