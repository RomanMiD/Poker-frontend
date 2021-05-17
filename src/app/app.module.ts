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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { StoryEditComponent } from './components/story-edit/story-edit.component';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { RegistrationComponent } from './views/registration/registration.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { HeaderComponent } from './components/header/header.component';
import { BoardComponent } from './views/board/board.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    HeaderComponent,
    BoardComponent,
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
    NgbModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faCoffee);
  }

}
