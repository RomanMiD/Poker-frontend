import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Game } from '../common/interfaces/game';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  gameData: Game | undefined;
  public gameID: number | undefined;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {

    this.gameID = +this.route.snapshot.params.id;
    this.gameService.getGame(this.gameID)
      .subscribe({
        next: (game) => {
          this.gameData = game;
        },
        error: () => {
          // alert('Данные игра не получены');
          this.toastr.error('Данные игры не получены');
        }
      });
  }

}
