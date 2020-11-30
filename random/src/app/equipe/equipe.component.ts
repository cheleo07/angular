import { UserComponent } from './../user/user.component';
import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  @Input() tabUsers: Array<User> = [];

  constructor(
    private userService: UserService,
    private user: UserComponent
  ) { }

  ngOnInit(): void {
  }


}
