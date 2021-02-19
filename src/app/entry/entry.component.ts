import {Component, OnInit} from '@angular/core';
import {convertToParamMap} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  form: FormGroup;
  get isCorrectly(): boolean{
    return this.form.invalid && (this.form.dirty || this.form.touched);
  }
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)]]});
  }

  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log(this.form.value);
    console.log(this.form.valid);
    alert('Works');
  }
}


