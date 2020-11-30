import { EquipeComponent } from './equipe/equipe.component';
import { Routes , RouterModule } from '@angular/router';
import { CardUserComponent } from './card-user/card-user.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  { path: 'user', component: UserComponent },
  { path: 'card/:id', component: CardUserComponent },
  { path: 'equipe', component: EquipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
