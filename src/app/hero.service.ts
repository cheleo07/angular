import { Injectable } from '@angular/core';
import {Hero} from './interfaces';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {MessageService} from './message.service';



const HEROES: Hero[] = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  selectedHero = new BehaviorSubject({id: null, name: null});
  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  selectHero(hero: Hero): void {
    this.messageService.add('HeroService: select hero');

this.selectedHero.next
(hero);
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero =>
hero.id
 === id));
  }
}
