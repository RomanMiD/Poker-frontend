import { GameStatus } from 'poker-common';

export const gameStatusLabel = {
  [GameStatus.Idle]: 'Ожидание',
  [GameStatus.ReviewStory]: 'Рассмотрение истории',
  [GameStatus.VoteEnd]: 'Головосание закончено',
  [GameStatus.ShowDown]: 'Карты вскрыты',
  [GameStatus.VoteProcess]: 'Головосание',
}
