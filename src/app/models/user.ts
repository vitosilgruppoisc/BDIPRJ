import { EUserRole } from './userroles';

export interface IUser {
    username: string;
    password: string;
    roles: EUserRole[];
}
