import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameComponent} from './game/game.component';
import {HomeComponent} from './home/home.component';
import {EntryComponent} from './entry/entry.component';
import {CreateGameComponent} from './create-game/create-game.component';
import { IdGuard } from './guards/id.guard';

const routes: Routes = [
  // {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path: '', component: HomeComponent},
  {path: 'game/:id', component: GameComponent, canActivate: [IdGuard]},
  {path: 'entry', component: EntryComponent},
  {path: 'newgame', component: CreateGameComponent},
  {path: '**', component: EntryComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  })
export class AppRoutingModule { }
