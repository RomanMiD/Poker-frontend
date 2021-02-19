import {Component, Input} from '@angular/core';
import {Card} from '../common/interfaces/card';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  @Input()
  nominal?: Card;
  @Input()
  isSelected = false;

}

