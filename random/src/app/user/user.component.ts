import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  users: any[];

  selectedUser: User;

  constructor(private userService: UserService) {}

  ngOnInit():void {
    this.userService.getUsers()
      .subscribe(data => {
        this.users = data;
        console.log(data);
      });

      this.userService.selectedUser
        .subscribe( value => {
        console.log(value);
        this.selectedUser = value;
      });
  }

  onSelect(user: User): void{
    this.userService.selectUser(user);
  }

  debug(){
    console.log(this.users);
  }

}
