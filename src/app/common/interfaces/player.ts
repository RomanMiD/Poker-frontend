import { UserBase } from 'poker-common';
import { Role } from '../enums/role.enum';

export interface  Player extends UserBase{
  role: Role;
}
