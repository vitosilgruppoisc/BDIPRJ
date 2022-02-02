import { Component, OnInit } from '@angular/core';
import {TipoParty} from '../../../models/party';
import {FilialeRiferimento} from '../../../models/filiale';
import {tap} from 'rxjs/operators';
import {PartyService} from '../../../services/party.service';
import {FilialeService} from '../../../services/filiale.service';
import {SecurityService, UserService} from '../../../services';
import {FormatterUtils} from '../../../utilities/formatterUtils';
import {RoutingService} from '../../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {AbstractAnagraficheComponent} from '../abstract-anagrafiche.component';
import {EccTranscodingIngrossoService} from "../../../services/ecc-transcoding-ingrosso.service";
import {TipoConto} from "../../../models/conto";
import {ContoService} from "../../../services/conto.service";
import {TipoFlagEnum} from "../../../models/enum";
import {TipoVerso} from "../../../models/ecc-transcoding-ingrosso";
import {EccTranscodingRetailService} from "../../../services/ecc-transcoding-retail.service";
import {CountryCode} from "../../../models/ecc-transcoding-retail";


export abstract class AbstractEccTranscodingRetailComponent extends  AbstractAnagraficheComponent implements OnInit {

    isActive: boolean = false;
    countryCodeList: CountryCode [];

    constructor( protected eccTranscodingRetailService: EccTranscodingRetailService,
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
        this.eccTranscodingRetailService.getCountryCodes().pipe(
            tap( res => this.countryCodeList = res)
        ).subscribe();
    }
}
