import { CardValue } from 'poker-common';
import { IconName } from '@fortawesome/fontawesome-svg-core';

export interface Card {
  nominal: CardValue;
  icon?: IconName;

}
