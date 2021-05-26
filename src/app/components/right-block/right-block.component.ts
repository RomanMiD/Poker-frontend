import { Component, Input, OnInit } from '@angular/core';
import { PlayerFull, Role } from 'poker-common';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.css']
})
export class RightBlockComponent implements OnInit {
  constructor() {
  }

  @Input()
  players: PlayerFull[];

  ngOnInit(): void {
  }

  isGameMaster(player: PlayerFull): boolean {
    return player.role === Role.GameMaster;
  }

}
