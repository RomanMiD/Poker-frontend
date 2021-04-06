import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RightBlockComponent } from './components/right-block/right-block.component';
import { PlaygroundComponent } from './components/playground/playground.component';
import { CardComponent } from './components/card/card.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { GameComponent } from './views/game/game.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateGameComponent } from './views/create-game/create-game.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoryEditComponent } from './components/story-edit/story-edit.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegistrationComponent } from './views/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    RightBlockComponent,
    PlaygroundComponent,
    CardComponent,
    HomeComponent,
    LoginComponent,
    GameComponent,
    CreateGameComponent,
    StoryEditComponent,
    TestComponentComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FontAwesomeModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCoffee);
  }

}
