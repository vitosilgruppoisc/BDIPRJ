import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {FilialeService} from '../../../../services/filiale.service';
import {ContoService} from '../../../../services/conto.service';
import {SecurityService, UserService} from '../../../../services';
import {FilterUtils} from '../../../../utilities/filterUtils';
import {FormatterUtils} from '../../../../utilities/formatterUtils';
import {FormBuilder} from '@angular/forms';
import {RSQLUtils} from '../../../../utilities/rsqlUtil';
import {Utils} from '../../../../utilities/util';
import {RoutingService} from '../../../../services/routing.service';
import {AbstractContiComponent} from '../abstract-conti.component';
import {forkJoin, of} from 'rxjs';
import {catchError, filter, map, mergeMap, switchMap, tap, toArray} from 'rxjs/operators';
import {GetPartiesResponse, Party} from '../../../../models/party';
import {Conto} from '../../../../models/conto';
import {Button, InfoPanelElement, InfoPanelModel} from '../../../../models/info-panel-model';
import {get} from 'lodash';
import {ContoSfruttamentoDcaParty} from '../../../../models/sfruttamento-dca';

@Component({
  selector: 'app-dettaglio-conto',
  templateUrl: './dettaglio-conto.component.html',
  styleUrls: ['./dettaglio-conto.component.scss']
})
export class DettaglioContoComponent extends  AbstractContiComponent implements OnInit {

  conto: Conto;
  party: Party;
  partyAnsy: Party;
  infoPanelContoModel: InfoPanelModel;
  //infoPanelSistemaAncillareModel: InfoPanelModel;

  sfruttamentiSistemaAncillare: ContoSfruttamentoDcaParty[] = [];
  sfruttamentiSistemaAncillareModel: InfoPanelModel [] = [];

  constructor(
      router: Router,
      protected partyService: PartyService,
      protected filialeService: FilialeService,
      protected contoService: ContoService,
      protected securityService: SecurityService,
      protected userService: UserService,
      private filterUtils: FilterUtils,
      protected formatterUtils: FormatterUtils,
      private formBuilder: FormBuilder,
      private rSQLUtils: RSQLUtils,
      private utils: Utils,
      protected routingService: RoutingService,
      protected route: ActivatedRoute
  ) {
    super(partyService, filialeService, contoService, securityService, userService, formatterUtils, routingService, route);
  }

  ngOnInit() {
    this.checkUserSpi();
    this.route.queryParams.subscribe(params => {
      const detailContoSessionObj = this.getSession(this.routingService.CONTO_DETAIL);
      if (!!detailContoSessionObj) {
        this.loadSections(detailContoSessionObj.idConto);
        this.backUrl = this.routingService.getRouteByKey(detailContoSessionObj.backUrl);
      } else {
        this.setError();
      }
    });
  }

  private loadSections (idConto: string) {
    this.showSpinner();

    this.contiService.getConto(idConto).pipe(
        tap(res => this.conto = <Conto>res),
        switchMap(res => this.partyService.getPartyByBicAndTipo(this.conto.subBicPtyAnsy, {codice: this.conto.subTipoPtyAnsy})),
        tap ( res => { this.partyAnsy = res; }),
        switchMap(res => this.partyService.getPartyByBicAndTipo(this.conto.bicParty, this.conto.tipoParty)),
        tap ( res => { this.party = res; }),
        switchMap(res => this.contoService.getSfruttamentoPartyConto(this.conto.id, ( !!this.party ? this.party.id : null))),
        tap ( (res: ContoSfruttamentoDcaParty[]) => { this.sfruttamentiSistemaAncillare = res; }),
        tap( res => {
          this.buildContoSection();
          if (!!this.party) {
            this.buildPartySection();
          }
          this.buildSistemaAncillareSection();
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

  private buildContoSection() {
    const data = [
      [this.buildInfoPanelElement('Bic', 'string', this.conto, 'bic'), this.buildInfoPanelElement('Target Service', 'string', this.conto, 'targetService')],
      [this.buildInfoPanelElement('Account Id', 'string', this.conto, 'numeroConto'), this.buildInfoPanelElement('ABI', 'string', this.conto, 'abi')],
      [this.buildInfoPanelElement('Tipo Conto', 'string', this.conto, 'tipoConto.descrizione'), this.buildInfoPanelElement('Descrizione', 'string', this.conto, 'descrizione')],
      [this.buildInfoPanelElement('Default MCA', 'boolean', this.conto, 'mcaDefFlag'), this.buildInfoPanelElement('Presso BDI', 'boolean', this.conto, 'pressoBdi')],
      [this.buildInfoPanelElement('Flag Inserimento Manuale', 'boolean', this.conto, 'flgMan'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.conto, 'indicatoreResidenza')],
      [this.buildInfoPanelElement('Categoria Economica', 'string', this.conto, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura', 'date', this.conto, 'dataApertura')],
      [this.buildInfoPanelElement('Data Chiusura', 'date', this.conto, 'dataChiusura'), this.buildInfoPanelElement('Data Inizio Validità Record', 'date', this.conto, 'validFrom')],
      [this.buildInfoPanelElement('Data Fine Validità Record', 'date', this.conto, 'validTo'), this.buildInfoPanelElement('Utente Inserimento/Modifica', 'string', this.conto, 'utenteRichiesta')],
      [this.buildInfoPanelElement('Utente Approvatore', 'string', this.conto, 'utenteValidazione'), {}]
    ];

    this.infoPanelContoModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };
  }

  private buildSistemaAncillareSection() {

    if (!!this.partyAnsy) {
      const data = [
        [this.buildInfoPanelElement('Party Bic', 'string', this.partyAnsy, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.partyAnsy, 'tipoParty.descrizione')],
        [this.buildInfoPanelElement('Nome Party', 'string', this.partyAnsy, 'nome'), {label: 'Tipo Sfruttamento', value: this.getTipoSfruttamento(this.conto.subTipoSfruttAnsy)}],
        [this.buildInfoPanelElement('Data Inizio Validità Sfruttamento', 'date', this.conto, 'validFrom'),  this.buildInfoPanelElement('Data Fine Validità Sfruttamento', 'date', this.conto, 'validTo')],
      ];
      this.sfruttamentiSistemaAncillareModel.push ( <InfoPanelModel> {
        columnNumber: 2,
        data: data,
        title: 'Sistema Ancillare ' +  this.partyAnsy.bic + ' - ' + this.conto.numeroConto
      });
    }

    if (!!this.sfruttamentiSistemaAncillare && this.sfruttamentiSistemaAncillare.length > 0) {

      this.sfruttamentiSistemaAncillare.forEach( s => {
        const data = [
          [this.buildInfoPanelElement('Party Bic', 'string', s.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', s.party, 'tipoParty.descrizione')],
          [this.buildInfoPanelElement('Nome Party', 'string', s.party, 'nome'), {label: 'Tipo Sfruttamento', value: this.NOT_DEFINED}],
          [this.buildInfoPanelElement('Data Inizio Validità Sfruttamento', 'date', s.sfruttamentoDca, 'validFrom'),  this.buildInfoPanelElement('Data Fine Validità Sfruttamento', 'date', s.sfruttamentoDca, 'validTo')],
        ];
        this.sfruttamentiSistemaAncillareModel.push ( <InfoPanelModel> {
          columnNumber: 2,
          data: data,
          title: 'Sistema Ancillare ' +  s.party.bic + ' - ' + s.conto.numeroConto
        });
      });
    }
  }

  getTipoSfruttamento (tipoSfruttamento: string) {
    const tipiSfruttamento = this.buildTipiSfruttamento();
    return tipiSfruttamento.find( t => t.codice == tipoSfruttamento).descrizione;
  }

  private buildPartySection() {
    const data = [
      [this.buildInfoPanelElement('Party Bic', 'string', this.party, 'bic'), this.buildInfoPanelElement('Tipo Party', 'string', this.party, 'tipoParty.descrizione')],
      [this.buildInfoPanelElement('Nome Party', 'string', this.party, 'nome'), this.buildInfoPanelElement('Indicatore di Residenza', 'string', this.party, 'indicatoreResidenza')],
      [this.buildInfoPanelElement('Categoria Economica', 'string', this.party, 'categoriaEconomica'), this.buildInfoPanelElement('Data Apertura Party', 'date', this.party, 'dataApertura')],
      [this.buildInfoPanelElement('Data Chiusura Party', 'date', this.party, 'dataChiusura'), this.buildDetailButton()],
    ];

    this.infoPanelPartyModel = <InfoPanelModel> {
      columnNumber: 2,
      data: data
    };
  }

  buildDetailButton(): InfoPanelElement {
    const button = <Button> {
      icon: 'far fa-file-alt',
      tooltip: 'Visualizza Party',
      routerLink: this.routingService.getRouteByKey(this.routingService.PARTY_DETAIL),
      params: {idParty: this.party.id, backUrl: this.routingService.CONTO_DETAIL},
      enabled: true,
      sessionKey: this.routingService.PARTY_DETAIL
    };
    return <InfoPanelElement> { button: button};
  }
}
