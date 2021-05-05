import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { Base } from '../../common/classes/base.class';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends Base implements OnInit {
  form: FormGroup;
  showPassword = false;
  isLoading = true;

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router,
              private toastr: ToastrService) {
    super();
    this.form = this.fb.group({
      email: [null, [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(100),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      name: [null, [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)]],
      password: [null, [Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)]],
    });
  }

  ngOnInit(): void {
  }

  showHidePassword(): void {
    this.showPassword = !this.showPassword;
    console.log(this.showPassword);
  }

  success(): void {
    this.toastr.success('Вы успешно авторизовались, переходим на главную...');
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.subs.sink = this.loginService.registration(this.form.value)
        .pipe(finalize(() => this.isLoading = false))
        .subscribe({
            next: () => {
              this.success();
              this.router.navigate(['/']);
              console.log(this.form.value);
            }
            ,
            error:
              () => this.toastr.error('Что-то пошло не так'),
          }
        );
    }
  }
}
