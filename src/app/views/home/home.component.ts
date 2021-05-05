import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) {
  }
  gotoPage(path: string, id?: number): void{
    this.router.navigate([path, id]);
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      counter: 5
    });
  }

}
