import { Component, Input, OnInit } from '@angular/core';
import { Player, Role } from 'poker-common';

@Component({
  selector: 'app-right-block',
  templateUrl: './right-block.component.html',
  styleUrls: ['./right-block.component.css']
})
export class RightBlockComponent implements OnInit {
  constructor() {
  }

  @Input()
  players: Player[];

  ngOnInit(): void {
  }

  isGameMaster(player: Player): boolean {
    return player.role === Role.GameMaster;
  }

}
