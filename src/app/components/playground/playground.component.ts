import { Component, OnInit } from '@angular/core';
import { CardValue } from 'poker-common';
import { Card } from '../../common/interfaces/card';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  cards: Array<Card> = [
    {nominal: CardValue.Zero},
    {nominal: CardValue.One},
    {nominal: CardValue.Two},
    {nominal: CardValue.Three},
    {nominal: CardValue.Five},
    {nominal: CardValue.Eight},
    {nominal: CardValue.Thirteen},
    {nominal: CardValue.Forty},
    {nominal: CardValue.Coffee, icon: 'coffee'}];

  selectedCard: Card = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
