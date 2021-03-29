import { User } from './user';

export interface UserRegistration extends User{
  email: string;
  password: string;
}
