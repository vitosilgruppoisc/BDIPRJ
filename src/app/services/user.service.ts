import { Injectable } from '@angular/core';
import { EUserRole, IUser } from '../models';

@Injectable({ providedIn: 'root' })
export class UserService {

    private user: IUser;

    constructor() { }

    public setUser(user: IUser) {
        this.user = user;
    }

    getUsername(): string {
        return this.user.username;
    }

    getAuth(): string {
        if (!!this.user) {
            return window.btoa(this.user.username + ':' + this.user.password);
        }
        return null;
    }

    getRoles(): EUserRole[] {
        return this.user.roles;
    }

    getAppRoles(): EUserRole[] {
        return this.user.roles.filter( r => {
            return Object.keys(EUserRole).some((v) => EUserRole[v] === r);
        });
    }

}
