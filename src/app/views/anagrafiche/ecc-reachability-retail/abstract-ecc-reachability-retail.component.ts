import { Component, OnInit } from '@angular/core';
import {tap} from 'rxjs/operators';
import {SecurityService, UserService} from '../../../services';
import {FormatterUtils} from '../../../utilities/formatterUtils';
import {RoutingService} from '../../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {AbstractAnagraficheComponent} from '../abstract-anagrafiche.component';
import {EccReachabilityRetailService} from "../../../services/ecc-reachability-retail.service";
import {Canale} from "../../../models/ecc-reachability-retail";
import {TipoFlagEnum} from "../../../models/enum";
import {TipoFlag} from "../../../models/conto";


export abstract class AbstractEccReachabilityRetailComponent extends  AbstractAnagraficheComponent implements OnInit {

    isActive: boolean = false;
    canaliList: Canale [];
    raggiungibileList: TipoFlag [];

    constructor( protected eccReachabilityRetailService: EccReachabilityRetailService,
                 protected securityService: SecurityService,
                 protected userService: UserService,
                 protected formatterUtils: FormatterUtils,
                 protected routingService: RoutingService,
                 protected route: ActivatedRoute) {

        super(securityService, userService, formatterUtils, routingService, route);
    }

    ngOnInit() {
        super.ngOnInit();
        this.buildCombo();
    }

    protected buildCombo() {
        this.eccReachabilityRetailService.getCanali().pipe(
            tap( res => this.canaliList = res)
        ).subscribe();

        this.raggiungibileList  = [ {codice: TipoFlagEnum.SI.valueOf(), descrizione: 'SI'}, {codice: TipoFlagEnum.NO.valueOf(), descrizione: 'NO' }];
    }
}
