import { Component, OnInit } from '@angular/core';
import {AbstractEccTranscodingIngrossoComponent} from "../../ecc-transcoding-ingrosso/abstract-ecc-transcoding-ingrosso.component";
import {InfoPanelModel} from "../../../../models/info-panel-model";
import {EccTranscondingIngrosso} from "../../../../models/ecc-transcoding-ingrosso";
import {ActivatedRoute, Router} from "@angular/router";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {SecurityService, UserService} from "../../../../services";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {RoutingService} from "../../../../services/routing.service";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {AbstractEccTranscodingRetailComponent} from "../abstract-ecc-transcoding-retail.component";
import {EccTranscondingRetail} from "../../../../models/ecc-transcoding-retail";
import {EccTranscodingRetailService} from "../../../../services/ecc-transcoding-retail.service";

@Component({
  selector: 'app-dettaglio-ecc-transcoding-retail',
  templateUrl: './dettaglio-ecc-transcoding-retail.component.html',
  styleUrls: ['./dettaglio-ecc-transcoding-retail.component.scss']
})
export class DettaglioEccTranscodingRetailComponent extends  AbstractEccTranscodingRetailComponent implements OnInit {

  infoPanelModel: InfoPanelModel;
  eccTransRet: EccTranscondingRetail;

  constructor(
      private router: Router,
      protected eccTranscodingRetailService: EccTranscodingRetailService,
      protected securityService: SecurityService,
      protected userService: UserService,
      protected formatterUtils: FormatterUtils,
      protected route: ActivatedRoute,
      protected routingService: RoutingService
  ) {
    super(eccTranscodingRetailService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.checkUserDet();

    this.route.queryParams.subscribe(params => {
      const detailEccSessionObj = this.getSession(this.routingService.ECC_TRANS_RET_DETAIL);
      if (!!detailEccSessionObj) {
        this.loadSections(detailEccSessionObj.idEccTransRet);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private loadSections (idEccTransRet: string) {
    this.showSpinner();

    this.eccTranscodingRetailService.getEccezioneTranscodingRetail(idEccTransRet).pipe (
        tap( res => {
          this.eccTransRet = res;
          this.buildEccTransRetSection();

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

  private buildEccTransRetSection() {
    const data = [
      [this.buildInfoPanelElement('Nsc', 'string',  this.eccTransRet, 'nsc'), this.buildInfoPanelElement('Country Code', 'string',  this.eccTransRet, 'countryCode.descrizione')],
      [this.buildInfoPanelElement('Bic', 'string',  this.eccTransRet, 'bic'), this.buildInfoPanelElement('Descrizione', 'string',  this.eccTransRet, 'descrizione')],
      [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.eccTransRet, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.eccTransRet, 'validTo')],
      [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.eccTransRet, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.eccTransRet, 'utenteValidazione')]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

  }
}
