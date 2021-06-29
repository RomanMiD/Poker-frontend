import { Component, forwardRef } from '@angular/core';
import {
  FormBuilder,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validators
} from '@angular/forms';
import { SubForm } from "../../common/classes/sub-from.class";

@Component({
  selector: 'app-story-edit',
  templateUrl: './story-edit.component.html',
  styleUrls: ['./story-edit.component.scss'],

  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => StoryEditComponent),
    multi: true
  },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => StoryEditComponent),
      multi: true
    }]
})


export class StoryEditComponent extends SubForm {
  constructor(private fb: FormBuilder) {
    super();
    this.form = fb.group({
      id: [null],
      position: [null],
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      body: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    });
  }
}
