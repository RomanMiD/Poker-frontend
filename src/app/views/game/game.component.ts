import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute, Route } from '@angular/router';
import { Game } from '../../common/interfaces/game';
import { ToastrService } from 'ngx-toastr';
import { Player } from '../../common/interfaces/player';
import { Role } from '../../common/enums/role.enum';
import { map } from 'rxjs/operators';
import { orderBy } from 'lodash';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  gameData: Game;
  gameID: number;
  players: Player[] = [
    {name: 'John', role: Role.Member},
    {name: 'Neytank', role: Role.Member},
    {name: 'Ivan', role: Role.GameMaster},
    {name: 'Shawn', role: Role.Member},
    {name: 'Mark', role: Role.Member}];


  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private toastr: ToastrService) {
  }

  currentStory = 0;

  increaseCount(): void {
    if (this.currentStory < this.questionsCount - 1) {
      this.currentStory++;
    }
  }

  get questionsCount(): number {
    return this.gameData?.stories.length as number;
  }

  ngOnInit(): void {

    this.gameID = +this.route.snapshot.params.id;
    this.gameService.getGame(this.gameID)
      .pipe(map((game) => {
        game.stories = orderBy(game.stories, ['position'] , ['asc']);
        return game;
      }))
      .subscribe({
        next: (game) => {
          this.gameData = game;
        },
        error: () => {
          // alert('Данные игры не получены');
          this.toastr.error('Данные игры не получены');
        }
      });
  }

}
