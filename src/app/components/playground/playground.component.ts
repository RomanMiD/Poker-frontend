import { Component, OnInit } from '@angular/core';
import { CardsEnum } from '../../common/enums/cards.enum';
import { Card } from '../../common/interfaces/card';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  cards: Array<Card> = [
    {nominal: CardsEnum.zero},
    {nominal: CardsEnum.one},
    {nominal: CardsEnum.two},
    {nominal: CardsEnum.three},
    {nominal: CardsEnum.five},
    {nominal: CardsEnum.eight},
    {nominal: CardsEnum.thirteen},
    {nominal: CardsEnum.forty},
    {nominal: CardsEnum.coffee, icon: 'coffee'}];

  selectedCard: Card = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
