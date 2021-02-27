import { User } from './user';
import { Role } from '../enums/role.enum';

export interface  Player extends User{
  role: Role;
}
