import {Component, OnInit} from '@angular/core';
import {CardsEnum} from '../common/enums/cards.enum';
import {Card} from '../common/interfaces/card';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  cards: Array<Card> = [{nominal: CardsEnum.zero}, {nominal: CardsEnum.one, icon: 'coffee' }];
  selectedCard: Card | null = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
