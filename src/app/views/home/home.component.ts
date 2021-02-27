import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from '../../common/interfaces/game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }
  gotoPage(path: string, id?: number): void{
    this.router.navigate([path, id]);
  }
  ngOnInit(): void {
  }

}
