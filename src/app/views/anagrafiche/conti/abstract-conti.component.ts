import {OnInit} from '@angular/core';
import {SecurityService, UserService} from '../../../services';
import {FormatterUtils} from '../../../utilities/formatterUtils';
import {TipoFlagEnum} from '../../../models/enum';
import {TipoParty} from '../../../models/party';
import {FilialeRiferimento} from '../../../models/filiale';
import {PartyService} from '../../../services/party.service';
import {FilialeService} from '../../../services/filiale.service';
import {tap} from 'rxjs/operators';
import {TipoConto, TipoFlag, TipoTargetService} from '../../../models/conto';
import {ContoService} from '../../../services/conto.service';
import {RoutingService} from '../../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {InfoPanelElement, InfoPanelModel} from '../../../models/info-panel-model';
import {get} from 'lodash';
import {AbstractAnagraficheComponent} from '../abstract-anagrafiche.component';

export abstract class AbstractContiComponent extends  AbstractAnagraficheComponent implements OnInit {

    tipiParty: TipoParty[];
    filialiRiferimento: FilialeRiferimento[];
    tipiConto: TipoConto [];
    tipiTargetService: TipoTargetService [];
    tipiPressoBDI: TipoFlag [];
    tipiManuale: TipoFlag[];
    tipiDefaultMCA: TipoFlag[];
    infoPanelPartyModel: InfoPanelModel;

    constructor( protected partyService: PartyService,
                 protected filialeService: FilialeService,
                 protected contiService: ContoService,
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

        this.contiService.getTipiConto().pipe(
            tap( res => this.tipiConto = res)
        ).subscribe();

        this.contiService.getTipiTargetService().pipe(
            tap( res => this.tipiTargetService = res)
        ).subscribe();

        this.tipiPressoBDI  = [ {codice: TipoFlagEnum.SI.valueOf(), descrizione: 'SI'}, {codice: TipoFlagEnum.NO.valueOf(), descrizione: 'NO' }];
        this.tipiManuale    = [ {codice: TipoFlagEnum.SI.valueOf(), descrizione: 'SI'}, {codice: TipoFlagEnum.NO.valueOf(), descrizione: 'NO' }];
        this.tipiDefaultMCA = [ {codice: TipoFlagEnum.SI.valueOf(), descrizione: 'SI'}, {codice: TipoFlagEnum.NO.valueOf(), descrizione: 'NO' }];
    }


}
