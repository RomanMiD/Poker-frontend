import { Component, OnDestroy, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, map, pairwise, throttleTime } from 'rxjs/operators';
import { Base } from '../../common/classes/base.class';


const enum Direction {
  Up = 'up',
  Down = 'down'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends Base implements OnInit {
  public isHidden = false;

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.subs.sink =
      fromEvent(window, 'scroll')
        .pipe(
          throttleTime(150),
          map(() => window.scrollY),
          pairwise(),
          map(([oldValue, newValue]) => {
            return oldValue > newValue ? Direction.Up : Direction.Down;
          }),
          distinctUntilChanged())
        .subscribe((direction) => {
          this.isHidden = direction === Direction.Down;
        });
  }
}
