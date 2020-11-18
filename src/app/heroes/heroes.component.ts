import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../interfaces';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  listHeroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(value => {
      console.log(value);
      this.listHeroes = value;
    });
    this.heroService.selectedHero.subscribe( value => {
      console.log(value);
      this.selectedHero = value;
    })
  }

  onSelect(hero: Hero):void{
    this.heroService.selectHero(hero);
    /*console.log(hero);
    this.selectedHero = hero;*/
  }
}
