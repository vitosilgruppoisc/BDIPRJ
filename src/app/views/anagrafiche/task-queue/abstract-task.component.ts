import {OnInit, TemplateRef, ViewChild} from '@angular/core';
import {of} from 'rxjs';
import {SecurityService, UserService} from '../../../services';
import {FormatterUtils} from '../../../utilities/formatterUtils';
import {EUserRole} from '../../../models';
import {SpinnerEventEnum, StatoTaskEnum, TipoOperazioneEnum} from '../../../models/enum';
import {OperazioneTask, StatoTask} from '../../../models/task';
import {ModalService} from 'scam-bdi-uikit';
import {RoutingService} from '../../../services/routing.service';
import {ActivatedRoute} from '@angular/router';
import {AbstractAnagraficheComponent} from '../abstract-anagrafiche.component';

export abstract class AbstractTaskComponent extends  AbstractAnagraficheComponent implements OnInit {

    showButtonConferma: boolean = false;
    showButtonRifiuta: boolean = false;

    @ViewChild('noteModal', { static: false })
    noteModal: TemplateRef<any>;
    private noteModalReference: any;

    note: string;

    constructor( protected securityService: SecurityService,
                 protected userService: UserService,
                 protected formatterUtils: FormatterUtils,
                 protected modalService: ModalService,
                 protected routingService: RoutingService,
                 protected route: ActivatedRoute) {
        super(securityService, userService, formatterUtils, routingService, route);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    protected isInsert(operazione: OperazioneTask): boolean {
        return operazione.codice === TipoOperazioneEnum.INS;
    }

    protected manageButton(stato: StatoTask , utenteRichiesta: string, roles: EUserRole[]) {
        this.showButtonConferma = false;
        this.showButtonRifiuta = false;
        const hasRole = this.securityService.checkPermissions(roles);
        if (!!hasRole && !!this.isDaApprovare(stato)) {
            this.showButtonRifiuta = true;
            this.showButtonConferma = !this.checkCurrentUserIsUserReq(utenteRichiesta);
        }
    }

    protected isDaApprovare(stato: StatoTask): boolean {
        return stato.codice === StatoTaskEnum.CREATED;
    }

    protected checkCurrentUserIsUserReq (utenteRichiesta: string): boolean {
        return this.userService.getUsername() == utenteRichiesta;
    }

    protected openModal() {
        this.noteModalReference = this.modalService.open(this.noteModal);
    }

    protected closeModal() {
        this.noteModalReference.close();
    }

}
