import { Injectable } from '@angular/core';
import {filter, last, map, pairwise, take, tap} from "rxjs/operators";
import {Router, RoutesRecognized} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RoutingService {

    readonly DASHBOARD_MONITORAGGIO = 'ANAGRAFICHE_MONITORAGGIO';
    readonly PARTY_SEARCH = 'PARTY_SEARCH';
    readonly PARTY_DETAIL = 'PARTY_DETAIL';
    readonly PARTY_INSERT = 'PARTY_INSERT';
    readonly PARTY_MODIFY = 'PARTY_MODIFY';
    readonly PARTY_DELETE = 'PARTY_DELETE';
    readonly CONTO_ASSOCIA_STEP1 = 'CONTO_ASSOCIA_STEP1';
    readonly CONTO_ASSOCIA_STEP2 = 'CONTO_ASSOCIA_STEP2';
    readonly CONTO_ELIMINA_ASSOCIAZIONE = 'CONTO_ELIMINA_ASSOCIAZIONE';

    readonly CONTI_SEARCH = 'CONTI_SEARCH';
    readonly CONTO_DETAIL = 'CONTO_DETAIL';
    readonly CONTO_INSERT_STEP1 = 'CONTO_INSERT_STEP1';
    readonly CONTO_INSERT_STEP2 = 'CONTO_INSERT_STEP2';
    readonly CONTO_INSERT_STEP3 = 'CONTO_INSERT_STEP3';
    readonly CONTO_INSERT_STEP4 = 'CONTO_INSERT_STEP4';
    readonly CONTO_MODIFY = 'CONTO_MODIFY';
    readonly CONTO_DELETE = 'CONTO_DELETE';

    readonly ECC_TRANS_INGR_SEARCH = 'ECC_TRANS_INGR_SEARCH';
    readonly ECC_TRANS_INGR_DETAIL = 'ECC_TRANS_INGR_DETAIL';
    readonly ECC_TRANS_INGR_INSERT = 'ECC_TRANS_INGR_INSERT';
    readonly ECC_TRANS_INGR_MODIFY = 'ECC_TRANS_INGR_MODIFY';
    readonly ECC_TRANS_INGR_DELETE = 'ECC_TRANS_INGR_DELETE';

    readonly ECC_TRANS_RET_SEARCH = 'ECC_TRANS_RET_SEARCH';
    readonly ECC_TRANS_RET_DETAIL = 'ECC_TRANS_RET_DETAIL';
    readonly ECC_TRANS_RET_INSERT = 'ECC_TRANS_RET_INSERT';
    readonly ECC_TRANS_RET_MODIFY = 'ECC_TRANS_RET_MODIFY';

    readonly ECC_RAGG_RET_SEARCH = 'ECC_RAGG_RET_SEARCH';
    readonly ECC_RAGG_RET_DETAIL = 'ECC_RAGG_RET_DETAIL';
    readonly ECC_RAGG_RET_INSERT = 'ECC_RAGG_RET_INSERT';
    readonly ECC_RAGG_RET_MODIFY = 'ECC_RAGG_RET_MODIFY';

    readonly TASK_SEARCH = 'TASK_SEARCH';
    readonly TASK_PARTY_DETAIL = 'TASK_PARTY_DETAIL';
    readonly TASK_CONTO_DETAIL = 'TASK_CONTO_DETAIL';
    readonly TASK_SFRUTTAMENTO_DETAIL = 'TASK_SFRUTTAMENTO_DETAIL';
    readonly TASK_ECC_TRANS_INGR_DETAIL = 'TASK_ECC_TRANS_INGR_DETAIL';
    readonly TASK_ECC_TRANS_RET_DETAIL = 'TASK_ECC_TRANS_RET_DETAIL';
    readonly TASK_ECC_RAGG_RET_DETAIL = 'TASK_ECC_RAGG_RET_DETAIL';

    private routeMap = new Map([
        [this.DASHBOARD_MONITORAGGIO, '/dashboard/monitoraggio'],
        [this.PARTY_SEARCH, '/anagrafiche/parties'],
        [this.PARTY_DETAIL, '/anagrafiche/parties/dettaglio'],
        [this.PARTY_MODIFY, '/anagrafiche/parties/modifica'],
        [this.PARTY_DELETE, '/anagrafiche/parties/eliminazione-logica'],
        [this.CONTO_ASSOCIA_STEP1, '/anagrafiche/parties/dettaglio/sfruttamento/associa-step1'],
        [this.CONTO_ASSOCIA_STEP2, '/anagrafiche/parties/dettaglio/sfruttamento/associa-step2'],
        [this.CONTO_ELIMINA_ASSOCIAZIONE, '/anagrafiche/parties/dettaglio/sfruttamento/eliminazione-logica'],

        [this.CONTI_SEARCH, '/anagrafiche/conti'],
        [this.CONTO_DETAIL, '/anagrafiche/conti/dettaglio'],
        [this.CONTO_MODIFY, '/anagrafiche/conti/modifica'],
        [this.CONTO_DELETE, '/anagrafiche/conti/eliminazione-logica'],
        [this.CONTO_INSERT_STEP1, '/anagrafiche/conti/inserimento/step1'],
        [this.CONTO_INSERT_STEP2, '/anagrafiche/conti/inserimento/step2'],
        [this.CONTO_INSERT_STEP3, '/anagrafiche/conti/inserimento/step3'],
        [this.CONTO_INSERT_STEP4, '/anagrafiche/conti/inserimento/step4'],

        [this.ECC_TRANS_INGR_SEARCH, '/anagrafiche/ecctranscodingingrosso'],
        [this.ECC_TRANS_INGR_DETAIL, '/anagrafiche/ecctranscodingingrosso/dettaglio'],
        [this.ECC_TRANS_INGR_MODIFY, '/anagrafiche/ecctranscodingingrosso/modifica'],
        [this.ECC_TRANS_INGR_DELETE, '/anagrafiche/ecctranscodingingrosso/eliminazione-logica'],

        [this.ECC_TRANS_RET_SEARCH, '/anagrafiche/ecctranscodingretail'],
        [this.ECC_TRANS_RET_DETAIL, '/anagrafiche/ecctranscodingretail/dettaglio'],
        [this.ECC_TRANS_RET_MODIFY, '/anagrafiche/ecctranscodingretail/modifica'],

        [this.ECC_RAGG_RET_SEARCH, '/anagrafiche/eccreachabilityretail'],
        [this.ECC_RAGG_RET_DETAIL, '/anagrafiche/eccreachabilityretail/dettaglio'],
        [this.ECC_RAGG_RET_MODIFY, '/anagrafiche/eccreachabilityretail/modifica'],

        [this.TASK_SEARCH, '/anagrafiche/taskqueue'],
        [this.TASK_PARTY_DETAIL, '/anagrafiche/taskqueue/dettaglio-party'],
        [this.TASK_CONTO_DETAIL, '/anagrafiche/taskqueue/dettaglio-conto'],
        [this.TASK_SFRUTTAMENTO_DETAIL, '/anagrafiche/taskqueue/dettaglio-sfruttamento'],
        [this.TASK_ECC_TRANS_INGR_DETAIL, '/anagrafiche/taskqueue/dettaglio-ecctranscodingingrosso'],
        [this.TASK_ECC_TRANS_RET_DETAIL, '/anagrafiche/taskqueue/dettaglio-ecctranscodingretail'],
        [this.TASK_ECC_RAGG_RET_DETAIL, '/anagrafiche/taskqueue/dettaglio-eccreachabilityretail']

    ]);

    constructor(private router: Router) { }

    public getRouteByKey(key: string) {
        return this.routeMap.get(key);
    }

    public getPreviousUrl(): Observable<string> {
        return this.router.events.pipe(
            filter((e: any) => e instanceof RoutesRecognized),
            pairwise(),
            take(1),
            tap( res => {
                console.log('P' + res[0].urlAfterRedirects);
                console.log('C' + res[1].urlAfterRedirects);
            }),
            map( res => res[0].urlAfterRedirects)
        );
    }
}
