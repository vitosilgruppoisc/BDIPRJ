import {OnInit } from '@angular/core';
import {of} from 'rxjs';
import {SecurityService, UserService} from '../../../services';
import {FormatterUtils} from '../../../utilities/formatterUtils';
import {StatoTaskEnum, } from '../../../models/enum';
import {Task, } from '../../../models/task';
import {ModalService} from 'scam-bdi-uikit';
import {RoutingService} from '../../../services/routing.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractTaskComponent} from './abstract-task.component';
import {InfoPanelElement, InfoPanelModel, Style, Tooltip} from '../../../models/info-panel-model';
import {get} from 'lodash';
import {catchError, switchMap, tap} from 'rxjs/operators';

export abstract class AbstractDettaglioTaskComponent extends  AbstractTaskComponent implements OnInit {

    infoPanelModel: InfoPanelModel;

    constructor(
        protected securityService: SecurityService,
        protected userService: UserService,
        protected modalService: ModalService,
        protected formatterUtils: FormatterUtils,
        protected routingService: RoutingService,
        protected route: ActivatedRoute
    ) {
        super(securityService, userService, formatterUtils, modalService, routingService, route);
    }

    ngOnInit() {
        this.checkUserSpi();
    }

    abstract loadSections( idTask);
    abstract getConferma( task: Task);
    abstract getRifiuta (task: Task);
    abstract getId(): number;

    buildInfoPanelElement(label: string, type: string, entity: any, field: string, fieldOrig?: string): InfoPanelElement {
        let value = null;
        let valueOrig = null;


        if ( type == 'string') {
            value = get(entity, field);
            valueOrig = get(entity, (!!fieldOrig ? fieldOrig : field.concat('Orig')));
        }

        if ( type == 'date') {
            value = this.formatterUtils.formatDate(entity, field);
            valueOrig = this.formatterUtils.formatDate(entity, (!!fieldOrig ? fieldOrig : field.concat('Orig')));
        }

        if ( type == 'boolean') {
            value = this.formatterUtils.getBooleanAsString(entity, field);
            valueOrig = this.formatterUtils.getBooleanAsString(entity, field.concat('Orig'));
        }

        return this.buildModel(label, value, valueOrig, entity );
    }


    protected buildModel (label: any, value: any, valueOrig: any, entity: any ): InfoPanelElement {
        let tooltip = null;
        let style = null;
        value = this.manageEmpty(value);
        valueOrig = this.manageEmpty(valueOrig);

        if ( !this.isInsert(entity.operazione) && !!this.isDaApprovare(entity.stato)) {

            if (value !== valueOrig) {
                tooltip = <Tooltip>{
                    value: valueOrig,
                    placement: 'right'
                };
                style = <Style>{
                    color: 'red',
                    fontweight: 'bold'
                };
            }
        }
        return <InfoPanelElement> { label: label, value: value, tooltip: tooltip, style: style};
    }

    conferma() {
        this.resetError();
        this.isResultOk = false;
        this.readonlyForm = false;
        this.showSpinner();

        const task = this.buildTask(this.getId(), StatoTaskEnum.APPROVED);
        this.getConferma(task).pipe(
            tap( res => this.loadSections(this.getId())),
            tap ( res => {
                this.isResultOk = true;
                this.readonlyForm = true;
                this.hideSpinner();
            }),

            catchError((error) => {
                console.log ('Error - conferma', error);
                this.setError(error);
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    rifiuta() {
        this.resetError();
        this.isResultOk = false;
        this.readonlyForm = false;
        this.showSpinner();

        const task = this.buildTask(this.getId(), StatoTaskEnum.REJECTED, this.note);
        this.getRifiuta(task).pipe(
            tap( res => this.loadSections(this.getId())),
            tap ( res => {
                this.isResultOk = true;
                this.closeModal();
                this.readonlyForm = true;
                this.hideSpinner();
            }),

            catchError((error) => {
                console.log ('Error - rifiuta', error);
                this.setError(error);
                this.closeModal();
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    private buildTask(id: number, stato: string, note?: string): Task {
        return <Task> {
            id: id,
            stato: {
                codice: stato
            },
            noteRifiuto: (!!note ? note : null)
        };
    }
}
