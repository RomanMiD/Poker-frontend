import { Component, OnInit, TemplateRef } from "@angular/core";
import { GameService } from "../../services/game.service";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { map, switchMap } from "rxjs/operators";
import { GameFull, PlayerFull, Story } from "poker-common";
import { cloneDeep, findIndex, orderBy } from "lodash";
import { NgbModalRef } from "@ng-bootstrap/ng-bootstrap/modal/modal-ref";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { environment } from "../../../environments/environment";
import { WsSocketGameService } from "../../services/ws-socket-game.service";

export const WS_ENDPOINT = `${environment.wsEndpoint}/game/`;

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrls: ["./game.component.scss"],
  providers: [WsSocketGameService]
})
export class GameComponent implements OnInit {
  gameData: GameFull;
  gameID: string;
  players: PlayerFull[] = [];
  currentStory = 0;
  modalRef: NgbModalRef;
  currentEditStory: Story;

  constructor(private gameService: GameService,
              private route: ActivatedRoute,
              private toastr: ToastrService,
              private modalService: NgbModal,
              private wsSocketGameService: WsSocketGameService) {

    this.wsSocketGameService.connect();
  }


  openEditStoryModal(template: TemplateRef<any>, story: Story): void {
    this.modalRef = this.modalService.open(template);
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
        }, error: () => this.toastr.error("Данные не были получены")
      });
    this.modalRef.close();

  }

  ngOnInit(): void {

    this.gameID = this.route.snapshot.params.id;
    this.wsSocketGameService.messages$.subscribe({
      next: data => {
        console.log(data)
      },
      err: err => {
        console.log(err)
      }
    });
    this.wsSocketGameService.sendMessage('qq');

    this.gameService.joinGame(this.gameID)
      .pipe(switchMap(() => {
          return this.gameService.getFullGame(this.gameID)
        }),
        map((res: any) => {
          return res.data;
        }), map((game) => {
          game.stories = orderBy(game.stories, ["position"], ["asc"]);
          return game;
        }))
      .subscribe({
        next: (game: GameFull) => {
          this.players = game.players
          this.gameData = game;
        },
        error: () => {
          // alert('Данные игры не получены');
          this.toastr.error("Данные игры не получены");
        }
      });

  }

}
