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


export abstract class AbstractPartyComponent extends  AbstractAnagraficheComponent implements OnInit {

    tipiParty: TipoParty[];
    filialiRiferimento: FilialeRiferimento[];
    isActive: boolean = false;

    constructor( protected partyService: PartyService,
                 protected filialeService: FilialeService,
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
        this.partyService.getTipiParties().pipe(
            tap( res => this.tipiParty = res)
        ).subscribe();

        this.filialeService.getFilialiRiferimento().pipe(
            tap( res => this.filialiRiferimento = res)
        ).subscribe();
    }
}
