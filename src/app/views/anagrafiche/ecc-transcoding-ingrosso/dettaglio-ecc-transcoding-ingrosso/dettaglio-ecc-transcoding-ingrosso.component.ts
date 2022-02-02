import { Component, OnInit } from '@angular/core';
import {InfoPanelModel} from "../../../../models/info-panel-model";
import {GenericTableModel} from "../../../../models/generic-table-model";
import {Party} from "../../../../models/party";
import {ActivatedRoute, Router} from "@angular/router";
import {PartyService} from "../../../../services/party.service";
import {FilialeService} from "../../../../services/filiale.service";
import {SecurityService, UserService} from "../../../../services";
import {ContoService} from "../../../../services/conto.service";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {FormBuilder} from "@angular/forms";
import {TaskService} from "../../../../services/task.service";
import {ModalService} from "scam-bdi-uikit";
import {RoutingService} from "../../../../services/routing.service";
import {AbstractAnagraficheComponent} from "../../abstract-anagrafiche.component";
import {AbstractEccTranscodingIngrossoComponent} from "../abstract-ecc-transcoding-ingrosso.component";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {forkJoin, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {Conto} from "../../../../models/conto";
import {ContoAsSettlmentBank} from "../../../../models/sfruttamento-dca";
import {TipoPartyEnum} from "../../../../models/enum";
import {EccTranscondingIngrosso} from "../../../../models/ecc-transcoding-ingrosso";

@Component({
  selector: 'app-dettaglio-ecc-transcoding-ingrosso',
  templateUrl: './dettaglio-ecc-transcoding-ingrosso.component.html',
  styleUrls: ['./dettaglio-ecc-transcoding-ingrosso.component.scss']
})
export class DettaglioEccTranscodingIngrossoComponent extends  AbstractEccTranscodingIngrossoComponent implements OnInit {

  infoPanelModel: InfoPanelModel;
  eccTransIngr: EccTranscondingIngrosso;

  constructor(
      private router: Router,
      protected eccTranscodingIngrossoService: EccTranscodingIngrossoService,
      protected securityService: SecurityService,
      protected userService: UserService,
      protected formatterUtils: FormatterUtils,
      protected route: ActivatedRoute,
      protected routingService: RoutingService
  ) {
    super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.checkUserSpi();

    this.route.queryParams.subscribe(params => {
      const detailEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_DETAIL);
      if (!!detailEccSessionObj) {
        this.loadSections(detailEccSessionObj.idEccTransIng);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private loadSections (idEccTransIng: string) {
    this.showSpinner();

    this.eccTranscodingIngrossoService.getEccezioneTranscodingIngrosso(idEccTransIng).pipe (
        tap( res => {
          this.eccTransIngr = res;
          this.buildEccTransIngrSection();

          this.hideSpinner();
        }),
        catchError((error) => {
          console.log ('Error - loadSections', error);
          this.setError();
          this.hideSpinner();
          return of(null);
        })
    ).subscribe();
  }

  private buildEccTransIngrSection() {
    const data = [
      [this.buildInfoPanelElement('Abi', 'string',  this.eccTransIngr, 'abi'), this.buildInfoPanelElement('Cab', 'string',  this.eccTransIngr, 'cab')],
      [this.buildInfoPanelElement('Tipo Conto', 'string',  this.eccTransIngr, 'tipoConto'), this.buildInfoPanelElement('Bic Conto', 'string',  this.eccTransIngr, 'bicConto')],
      [this.buildInfoPanelElement('Verso', 'string',  this.eccTransIngr, 'verso'), this.buildInfoPanelElement('Descrizione', 'string',  this.eccTransIngr, 'descrizione')],
      [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.eccTransIngr, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.eccTransIngr, 'validTo')],
      [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.eccTransIngr, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.eccTransIngr, 'utenteValidazione')]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

  }
}
