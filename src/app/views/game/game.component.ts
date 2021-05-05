import { Component, OnInit, TemplateRef } from '@angular/core';
import { GameService } from '../../services/game.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { orderBy } from 'lodash';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Game, Story, Role, Player } from 'poker-common';
import { cloneDeep, findIndex } from 'lodash';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  gameData: Game;
  gameID: number;
  players: Player[] = [];
  currentStory = 0;
  modalRef: BsModalRef;
  currentEditStory: Story;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private modalService: BsModalService) {
  }


  openEditStoryModal(template: TemplateRef<any>, story: Story): void {
    this.modalRef = this.modalService.show(template);
    this.currentEditStory = cloneDeep(story);
  }

  increaseCount(): void {
    if (this.currentStory < this.questionsCount - 1) {
      this.currentStory++;
    }
  }

  get questionsCount(): number {
    return this.gameData?.stories.length as number;
  }

  modalOnSubmit(): void {
    this.gameService.updateGameStory()
      .pipe(map(value => value))
      .subscribe({
        next: value => {
          const storyIndex = findIndex(this.gameData.stories, {_id: value._id});
          this.gameData.stories[storyIndex] = value;
        }, error: () => this.toastr.error('Данные не были получены')
      });
    this.modalRef.hide();

  }


  ngOnInit(): void {
    this.gameID = +this.route.snapshot.params.id;
    this.gameService.getGame(this.gameID)
      .pipe(map((game) => {
        // console.log(game.stories);
        game.stories = orderBy(game.stories, ['position'], ['asc']);
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
