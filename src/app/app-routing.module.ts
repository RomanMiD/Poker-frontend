import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameComponent} from './views/game/game.component';
import {HomeComponent} from './views/home/home.component';
import {LoginComponent} from './views/login/login.component';
import {CreateGameComponent} from './views/create-game/create-game.component';
import { IdGuard } from './guards/id.guard';
import { RegistrationComponent } from './views/registration/registration.component';

const routes: Routes = [
  // {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path: '', component: HomeComponent},
  {path: 'game/:id', component: GameComponent, canActivate: [IdGuard]},
  {path: 'api/users/login', component: LoginComponent},
  {path: 'create', component: CreateGameComponent},
  {path: 'api/users/registration', component: RegistrationComponent},
  {path: '**', component: LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  })
export class AppRoutingModule { }
