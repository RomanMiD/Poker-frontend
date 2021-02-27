import { Story } from './story';

export interface Game {
  roomName: string;
  stories: Story[];
  id?: number;
}
