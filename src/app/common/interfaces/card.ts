import {CardsEnum} from '../enums/cards.enum';
import {IconName} from '@fortawesome/fontawesome-svg-core';

export interface Card {
  nominal: CardsEnum;
  icon?: IconName;

}
