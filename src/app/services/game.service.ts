import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Story, Game } from "poker-common";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class GameService {
  private basePath = `${environment.apiUrl}/game`;

  constructor(private http: HttpClient) {
  }

  /**
   * метод создания игры
   *
   * @param game - данные игры для создания
   */
  createGame(game: Game): Observable<Game> {
    return this.http.post<Game>(`${this.basePath}/create`, game);
  }

  /**
   * Метод получения данных игры (тоже пока как бы с бекенда)
   */
  getGame(id: number): Observable<Game> {
    return this.http.get<Game>("/assets/stubdata/game.json");
  }

  updateGameStory(): Observable<Story> {
    return this.http.get<Story>("/assets/stubdata/story.json");
  }
}
