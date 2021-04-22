import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Story, Game } from 'poker-common';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private Http: HttpClient) {
  }

  /**
   * метод создания игры
   * пока эмулирует создание игры!!
   * @param game - данные игры для создания
   */
  createGame(game: Game): Observable<Game> {
    // запрос должен создавать игру. Временно стоит get. Тому шо пока нет бекенда
    return this.Http.get<Game>('/assets/stubdata/game.json');
  }

  /**
   * Метод получения данных игры (тоже пока как бы с бекенда)
   */
  getGame(id: number): Observable<Game> {
    return this.Http.get<Game>('/assets/stubdata/game.json');
  }

  updateGameStory(): Observable<Story> {
    return this.Http.get<Story>('/assets/stubdata/story.json');
  }
}
