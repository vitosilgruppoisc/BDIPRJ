import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApplicationConfig, IUser } from '../models';
import { environment } from './../../environments/environment';
import { ConfigurationService } from './configuration.service';
import { UserService } from './user.service';
import { zip } from 'rxjs';

@Injectable()
export class AppInitializerService {

    constructor(private http: HttpClient, private userService: UserService, private configurationService: ConfigurationService) { }

    initialize(): Promise<[IUser, IApplicationConfig]> | string {

        // initialize config with environment static data and then overload it with server side data
        let appConfig: IApplicationConfig = Object.assign({} as IApplicationConfig, environment);
        const promise = zip(
            this.http.get<IUser>(`${appConfig.apiEndpoint}/userprofile`),
            this.http.get<IApplicationConfig>(`${appConfig.apiEndpoint}/applicationconfig`)
        ).toPromise();
        promise.then((results: [IUser, IApplicationConfig]) => {
            const user: IUser = results[0];
            console.log('Setting User with ', user);
            this.userService.setUser(user);
            appConfig = Object.assign(appConfig, results[1]);
            console.log('Setting ApplicationConfiguration with ', appConfig);
            this.configurationService.setConfig(appConfig);
        });
        return promise;
    }
}
