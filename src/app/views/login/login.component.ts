import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  showPassword = true;

  get isCorrectly(): boolean {
    return this.form.invalid && (this.form.dirty || this.form.touched);
  }

  constructor(private fb: FormBuilder,
              private toastr: ToastrService) {
    this.form = this.fb.group({
      email: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    this.toastr.success('Переходим куда-то');
  }

  toggleFieldTextType(): void {
    this.showPassword = !this.showPassword;
  }
}


