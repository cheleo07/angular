import { ExampleService } from './../example.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../interfaces';
import { HeroService } from './../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService, private exampleService: ExampleService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

  testRequestApi(): void{
    this.exampleService.getUsers(5).subscribe(value => console.log(value));
  }

}

