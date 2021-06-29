import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { finalize, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GameBase, Story } from 'poker-common';
import { Base } from '../../common/classes/base.class';
import { cloneDeep } from 'lodash';

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
      description: [null,
        [Validators.minLength(15),
          Validators.maxLength(150)]],
      stories: this.fb.array([this.newStoryElement()])
    });
  }

  ngOnInit(): void {

  }


  get stories(): FormArray {
    return this.form.get('stories') as FormArray;
  }

  addStory(): void {
    // Пересмотреть количество вопросов
    if (this.stories.controls.length < 5) {
      this.stories.push(this.newStoryElement());
    }
  }

  private newStoryElement(): FormControl {
    return this.fb.control({position: null, title: null, body: null} as Story);
  }

  removeQuestion(i: number): void {
    if (this.stories.controls.length > 1) {
      this.stories.controls.splice(i, 1);
    }
  }

  get questionsCount(): number {
    return this.stories.controls.length;
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
      const formValue = cloneDeep(this.form.value);
      formValue.stories.forEach((story, index) => {
        delete story.id;
        story.position = index;
      })
      this.subs.sink = this.gameService.createGame(formValue)
        .pipe(finalize(() => this.isLoading = false),
          map((res) => {
            return res.data
          }))
        .subscribe({
          next: (createdGame: GameBase) => {
            this.router.navigate(['/game', createdGame._id]);
            this.successCreateGame('Игра успешно создана');
          },
          error: () => this.failedCreateGame('Что-то пошло не так')
        });
    }
  }

}
