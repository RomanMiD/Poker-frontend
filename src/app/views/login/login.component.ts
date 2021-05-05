import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';
import { SubSink } from 'subsink';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  showPassword = true;
  subs = new SubSink();

  get isCorrectly(): boolean {
    return this.form.invalid && (this.form.dirty || this.form.touched);
  }

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private loginService: LoginService,
              private authService: AuthService
  ) {
    this.form = this.fb.group({
      email: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]],
      password: [null, [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.subs.sink = this.loginService
        .login(this.form.value)
        .subscribe({
          next: (res) => {
            this.authService.setToken(res.data.token);
            this.loginService.whoAmI().subscribe((resWho) => console.log(resWho));
          },
          error: () => console.log('something wrong')
        });
    }


  }

  toggleFieldTextType(): void {
    this.showPassword = !this.showPassword;
  }
}


