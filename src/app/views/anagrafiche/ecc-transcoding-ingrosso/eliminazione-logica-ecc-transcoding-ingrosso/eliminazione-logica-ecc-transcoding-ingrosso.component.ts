import { Component, OnInit } from '@angular/core';
import {AbstractEccTranscodingIngrossoComponent} from "../abstract-ecc-transcoding-ingrosso.component";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {IDatepickerModel} from "scam-bdi-uikit/lib/daterangepicker/interfaces";
import {EccTranscondingIngrosso} from "../../../../models/ecc-transcoding-ingrosso";
import {ActivatedRoute, Router} from "@angular/router";
import {EccTranscodingIngrossoService} from "../../../../services/ecc-transcoding-ingrosso.service";
import {SecurityService, UserService} from "../../../../services";
import {FilterUtils} from "../../../../utilities/filterUtils";
import {FormatterUtils} from "../../../../utilities/formatterUtils";
import {TaskService} from "../../../../services/task.service";
import {RoutingService} from "../../../../services/routing.service";
import {catchError, tap} from "rxjs/operators";
import {of} from "rxjs";
import {dateValidator} from "../../../../validators/date-validator";
import {TaskEccTranscodingIngrosso, TaskParty} from "../../../../models/task";
import {TipoOperazioneEnum} from "../../../../models/enum";

@Component({
    selector: 'app-eliminazione-logica-ecc-transcoding-ingrosso',
    templateUrl: './eliminazione-logica-ecc-transcoding-ingrosso.component.html',
    styleUrls: ['./eliminazione-logica-ecc-transcoding-ingrosso.component.scss']
})
export class EliminazioneLogicaEccTranscodingIngrossoComponent extends AbstractEccTranscodingIngrossoComponent implements OnInit {

    eccTransIngr: EccTranscondingIngrosso;
    minDate: IDatepickerModel;

    eliminazioneForm: FormGroup;

    constructor(
        router: Router,
        protected eccTranscodingIngrossoService: EccTranscodingIngrossoService,
        protected securityService: SecurityService,
        protected userService: UserService,
        private filterUtils: FilterUtils,
        protected formatterUtils: FormatterUtils,
        private formBuilder: FormBuilder,
        private taskService: TaskService,
        protected routingService: RoutingService,
        protected route: ActivatedRoute
    ) {
        super(eccTranscodingIngrossoService, securityService, userService, formatterUtils, routingService, route);
    }

    ngOnInit() {
        super.ngOnInit();
        this.route.queryParams.subscribe(params => {
            const deleteEccSessionObj = this.getSession(this.routingService.ECC_TRANS_INGR_DELETE);
            if (!!deleteEccSessionObj) {
                this.load(deleteEccSessionObj.idEccTransIng);
                this.backUrl = this.backUrl = this.routingService.getRouteByKey(deleteEccSessionObj.backUrl);
            } else {
                this.setError();
            }
        });
    }

    private load (idEcc: string) {
        this.showSpinner();
        this.eccTranscodingIngrossoService.getEccezioneTranscodingIngrosso(idEcc).pipe(
            tap( res => {
                this.eccTransIngr = res;
                this.isActive = this.isEccTranscodingIngrossoActive(this.eccTransIngr);
                if (!this.isActive) {
                    this.readonlyForm = true;
                }
                const validFrom = new Date(this.eccTransIngr.validFrom);
                const validTo = new Date(this.eccTransIngr.validTo);
                //this.minDate = {day: validFrom.getUTCDate(), month: (validFrom.getUTCMonth() + 1), year: validFrom.getFullYear()};
                this.eliminazioneForm = this.formBuilder.group({
                    dataFineValidita: new FormControl(  {year: validTo.getFullYear(), month: (validTo.getUTCMonth() + 1), day: validTo.getUTCDate()} , [Validators.required]),
                }, { validator: dateValidator( [
                        {field1: 'dataFineValidita', /*minDate1: this.minDate,*/ required1: true}
                    ]) });
                this.hideSpinner();
            }),
            catchError((error) => {
                console.log ('Error - load', error);
                this.setError(error);
                this.hideSpinner();
                return of(null);
            })
        ).subscribe();
    }

    get dataFineValidita() { return this.eliminazioneForm.get('dataFineValidita'); }

    reset(field) {
        this.eliminazioneForm.get(field).setValue(undefined);
    }

    onSubmit() {
        this.resetError();
        this.isResultOk = false;

        if (this.eliminazioneForm.valid) {
            this.showSpinner();
            const taskEccTranscodingIngrossoReq = this.buildTaskEccTranscodingIngrosso();
            this.taskService.saveTaskEccTranscodingIngrosso(taskEccTranscodingIngrossoReq).pipe(
                tap( res => {
                    this.eliminazioneForm.get('dataFineValidita').setValue(res.validTo);
                    this.isResultOk = true;
                    this.hideSpinner();
                    this.readonlyForm = true;
                }),
                catchError((error) => {
                    console.log ('Error - onSubmit', error);
                    this.setError(error);
                    this.hideSpinner();
                    return of(null);
                })
            ).subscribe();
        }
    }

    private buildTaskEccTranscodingIngrosso (): TaskEccTranscodingIngrosso {
        return <TaskEccTranscodingIngrosso> {
            operazione: {
                codice: TipoOperazioneEnum.DEL
            },
            validTo: this.formatterUtils.dateToString(this.dataFineValidita.value),
            idEccOrig: this.eccTransIngr.id
        };
    }

     getDataFineValiditaValue() {
        return  this.eliminazioneForm.get('dataFineValidita').value;
    }
}
