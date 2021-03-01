import { Component, forwardRef, Input} from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup, NG_VALIDATORS,
  NG_VALUE_ACCESSOR, ValidationErrors, Validator,
  Validators
} from '@angular/forms';
import { Base } from '../../common/classes/base.class';
import { Story } from '../../common/interfaces/story';

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
export class StoryEditComponent extends Base implements ControlValueAccessor, Validator {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    super();
    this.form = fb.group({
      id: [null],
      position: [null],
      title: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(80)]],
      body: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(300)]],
    });

    this.subs.sink = this.form.valueChanges.subscribe(() => {
      this.validatorChange();
    });
  }

  get value(): any {
    return this.form.value;
  }

  @Input()
  set value(val: any) {
    if (val == null) {
      return;
    }
    this.form.patchValue(val);
    this.onChange(this.form.value);
    this.validatorChange();
  }

  validate(): ValidationErrors {
    // return this.form.errors;
    return this.form.valid ? null : {invalid: true};
  }

  validatorChange(): void {

  }

  onChange(value: Story): void {
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  registerOnValidatorChange?(fn: () => void): void {
    this.validatorChange = fn;
  }
}
