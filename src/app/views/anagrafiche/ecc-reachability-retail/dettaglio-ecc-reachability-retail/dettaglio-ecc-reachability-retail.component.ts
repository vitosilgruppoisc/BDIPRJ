import {AbstractEccReachabilityRetailComponent} from "../abstract-ecc-reachability-retail.component";
import {InfoPanelModel} from "../../../../models/info-panel-model";
import {catchError, tap} from "rxjs/operators";
import {EccReachabilityRetail} from "../../../../models/ecc-reachability-retail";
import {SecurityService, UserService} from "../../../../services";
import {RoutingService} from "../../../../services/routing.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {EccReachabilityRetailService} from "../../../../services/ecc-reachability-retail.service";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {of} from "rxjs";

@Component({
  selector: 'app-dettaglio-ecc-reachability-retail',
  templateUrl: './dettaglio-ecc-reachability-retail.component.html',
  styleUrls: ['./dettaglio-ecc-reachability-retail.component.scss']
})
export class DettaglioEccReachabilityRetailComponent extends  AbstractEccReachabilityRetailComponent implements OnInit {

  infoPanelModel: InfoPanelModel;
  eccRaggRet: EccReachabilityRetail;

  constructor(
      private router: Router,
      protected eccReachabilityRetailService: EccReachabilityRetailService,
      protected securityService: SecurityService,
      protected userService: UserService,
      protected formatterUtils: FormatterUtils,
      protected route: ActivatedRoute,
      protected routingService: RoutingService
  ) {
    super(eccReachabilityRetailService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.checkUserDet();

    this.route.queryParams.subscribe(params => {
      const detailEccSessionObj = this.getSession(this.routingService.ECC_RAGG_RET_DETAIL);
      if (!!detailEccSessionObj) {
        this.loadSections(detailEccSessionObj.idEccRaggRet);
        this.backUrl = this.backUrl = this.routingService.getRouteByKey(detailEccSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private loadSections (idEccRaggRet: string) {
    this.showSpinner();

    this.eccReachabilityRetailService.getEccezioneReachabilityRetail(idEccRaggRet).pipe (
        tap( res => {
          this.eccRaggRet = res;
          this.buildeccRaggRetSection();

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

  private buildeccRaggRetSection() {
    const data = [
      [this.buildInfoPanelElement('Bic Input', 'string',  this.eccRaggRet, 'bicInput'), this.buildInfoPanelElement('Canale', 'string',  this.eccRaggRet, 'canale.descrizione')],
      [this.buildInfoPanelElement('Raggiungibile', 'boolean',  this.eccRaggRet, 'raggiungibile'), this.buildInfoPanelElement('Descrizione', 'string',  this.eccRaggRet, 'descrizione')],
      [/*this.buildInfoPanelElement('Bic Output', 'string',  this.eccRaggRet, 'bicOutput'),*/  this.buildInfoPanelElement('Bic Diretto', 'string',  this.eccRaggRet, 'bicDiretto'), {}],
      [this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.eccRaggRet, 'validFrom'), this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.eccRaggRet, 'validTo')],
      [this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.eccRaggRet, 'utenteRichiesta'), this.buildInfoPanelElement('Utente Approvatore', 'string', this.eccRaggRet, 'utenteValidazione')]
    ];

    this.infoPanelModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };

  }
}
