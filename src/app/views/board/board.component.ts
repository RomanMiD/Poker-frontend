import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameListItem, GameStatus, PaginationParams } from 'poker-common';
import { GameService } from '../../services/game.service';
import { map } from 'rxjs/operators';
import { gameStatusLabel } from '../../common/describies/game-status-label';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public pageSize: number = 10;
  public totalCount: number;
  public gameList$: Observable<GameListItem[]>;
  formatDate: string = 'dd-MM-yyyy HH:mm';

  constructor(private gameService: GameService) {

  }

  ngOnInit(): void {
    this.getList();
  }
// TODO Доработать сортировку
  onSort(evt) {

  }

  getStatusLabel(status: GameStatus): string {
    return gameStatusLabel[status] || status || 'Нет статуса'
  }

  getList(paginationParams: PaginationParams= {skip: 0, limit: this.pageSize}): void {
    this.gameList$ = this.gameService.getGameList(paginationParams).pipe(map((res) => {
      this.totalCount = res.data.count;
      return res.data.items
    }))
  }

  onPageChange(paginationParams: PaginationParams) {
    this.getList(paginationParams)
  }

}
