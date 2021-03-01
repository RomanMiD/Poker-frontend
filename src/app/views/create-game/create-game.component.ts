import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Game } from '../../common/interfaces/game';
import { ToastrService } from 'ngx-toastr';
import { Story } from '../../common/interfaces/story';
import { Base } from '../../common/classes/base.class';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent extends Base implements OnInit {
  form: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder,
              private gameService: GameService,
              private router: Router,
              private toastr: ToastrService) {
    super();
    this.form = this.fb.group({
      roomName: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40)]],
      questions: this.fb.array([this.newQuestionElement()])
    });
  }

  ngOnInit(): void {
  }

  get questions(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  get roomName(): string {
    return this.form.get('roomName') as any;
  }

  addQuestion(): void {
    if (this.questions.controls.length < 5) {
      this.questions.push(this.newQuestionElement());
    }
  }

  private newQuestionElement(): FormControl {
    return this.fb.control({position: null, title: null, body: null} as Story);
  }

  removeQuestion(i: number): void {
    if (this.questions.controls.length > 1) {
      this.questions.controls.splice(i, 1);
    }
  }

  get questionsCount(): number {
    return this.questions.controls.length;
  }

  successCreateGame(message: string): void {
    this.toastr.success(message);
  }

  failedCreateGame(message: string): void {
    this.toastr.error(message);
  }

  /**
   * Если форма создания игры валидна - перенаправляет на созданную игру
   * и выводит сообщение о созданной игре, иначе - сообщение об ошибке.
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.isLoading = true;
      // this.submitSubscription
      this.subs.sink = this.gameService.createGame(this.form.value)
        .pipe(finalize(() => this.isLoading = false))
        .subscribe({
          next: (createdGame: Game) => {
            this.router.navigate(['game', createdGame.id]);
            this.successCreateGame('Игра успешно создана');
          },
          error: () => this.failedCreateGame('Что-то пошло не так')
        });
    }
  }
}
