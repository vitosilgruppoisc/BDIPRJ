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


export abstract class AbstractEccTranscodingIngrossoComponent extends  AbstractAnagraficheComponent implements OnInit {

    tipiConto: TipoConto[];
    tipiVerso: TipoVerso[];
    isActive: boolean = false;

    constructor( protected eccTranscodingIngrossoService: EccTranscodingIngrossoService,
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

        this.eccTranscodingIngrossoService.getTipiConto().pipe(
            tap( res => this.tipiConto = res)
        ).subscribe();

        this.eccTranscodingIngrossoService.getTipiVerso().pipe(
            tap( res => this.tipiVerso = res)
        ).subscribe();
    }
}
