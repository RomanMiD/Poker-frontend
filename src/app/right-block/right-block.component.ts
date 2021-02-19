import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import {any} from 'codelyzer/util/function';
import { Game } from '../common/interfaces/game';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.css']
})
export class RightBlockComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }

}
// function observableTimer(){
//   const source = timer(1000, 2000);
//   const abc = source.subscribe(val => {
//     this.subscribeTimer = this.timeLeft - val;
//   });
// }
