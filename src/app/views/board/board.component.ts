import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameBase, GameListItem, GameStatus } from 'poker-common';
import { GameService } from '../../services/game.service';
import { map } from 'rxjs/operators';
import { gameStatusLabel } from '../../common/describies/game-status-label';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public gameList$: Observable<GameListItem[]>;
  formatDate: string = 'dd-MM-yyyy HH:mm';

  constructor(private gameService: GameService) {
    this.gameList$ = gameService.getGameList().pipe(map((res) =>{

      return res.data
    }))
  }

  ngOnInit(): void {
  }

  onSort(evt){

  }
  getStatusLabel(status: GameStatus): string{
    return gameStatusLabel[status] || status || 'Нет статуса'
  }


}
