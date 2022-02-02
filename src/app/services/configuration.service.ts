import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {IApplicationConfig} from '../models/applicationconfig';

@Injectable()
export class ConfigurationService {

  private configSource$: BehaviorSubject<IApplicationConfig> = new BehaviorSubject<IApplicationConfig>(null);
  public config$: Observable<IApplicationConfig> = this.configSource$.asObservable().pipe(filter(config => !!config));

  constructor() {
  } // tslint:disable-line

  public setConfig(config: IApplicationConfig) {
        this.configSource$.next(config);
    }

}
