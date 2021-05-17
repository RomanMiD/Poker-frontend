import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Story, GameFull, CreateGameResponse, GameListResponse } from 'poker-common';
import { environment } from "../../environments/environment";
import { GetGameResponse } from '../../../../pokher-common/src';

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
  createGame(game: GameFull): Observable<CreateGameResponse> {
    return this.http.post<CreateGameResponse>(`${this.basePath}/create`, game);
  }

  /**
   * Метод получения данных игры
   */
  getGame(id: string): Observable<GetGameResponse> {
    return this.http.get<GetGameResponse>(`${this.basePath}/full/${id}`);
  }

  getGameList(): Observable<GameListResponse> {
    return this.http.get<GameListResponse>(`${this.basePath}/list`);
  }

  updateGameStory(): Observable<Story> {
    return this.http.get<Story>("/assets/stubdata/story.json");
  }
}
