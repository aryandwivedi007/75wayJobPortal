import { Role } from '../common/dto/role.dto';

export interface IUser {
  fullName: string;
  email: string;
  password: string;
  role: Role;
  active: boolean;
}

export interface IUpdateUser {
  fullName: string;
  email: string;
  role: Role;
  active: boolean;
}
