import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GameBase } from 'poker-common';
import { GameService } from '../../services/game.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public gameList$: Observable<GameBase[]>;

  constructor(private gameService: GameService) {
    this.gameList$ = gameService.getGameList().pipe(map((res) =>{
      return res.data
    }))
  }

  ngOnInit(): void {
  }

  onSort(evt){

  }
}
