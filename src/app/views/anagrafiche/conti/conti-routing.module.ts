import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RicercaPartiesComponent} from '../parties/ricerca-parties/ricerca-parties.component';
import {EUserRole} from '../../../models';
import {SecurityService} from '../../../services';
import {RicercaContiComponent} from './ricerca-conti/ricerca-conti.component';
import {RicercaTaskQueueComponent} from '../task-queue/ricerca-task-queue/ricerca-task-queue.component';
import {DettaglioTaskPartyComponent} from '../task-queue/dettaglio-task-party/dettaglio-task-party.component';
import {DettaglioPartyComponent} from '../parties/dettaglio-party/dettaglio-party.component';
import {DettaglioContoComponent} from './dettaglio-conto/dettaglio-conto.component';
import {InserimentoContoStep1Component} from './inserimento-conto/inserimento-conto-step1/inserimento-conto-step1.component';
import {InserimentoContoStep2Component} from './inserimento-conto/inserimento-conto-step2/inserimento-conto-step2.component';
import {InserimentoContoStep4Component} from './inserimento-conto/inserimento-conto-step4/inserimento-conto-step4.component';
import {InserimentoContoStep3Component} from './inserimento-conto/inserimento-conto-step3/inserimento-conto-step3.component';
import {ModificaPartyComponent} from '../parties/modifica-party/modifica-party.component';
import {ModificaContoComponent} from './modifica-conto/modifica-conto.component';
import {EliminazioneLogicaPartyComponent} from '../parties/eliminazione-logica-party/eliminazione-logica-party.component';
import {EliminazioneLogicaContoComponent} from './eliminazione-logica-conto/eliminazione-logica-conto.component';
import {AssocazioneContoStep1Component} from './sfruttamento-ansy/assocazione-conto-step1/assocazione-conto-step1.component';
import {AssocazioneContoStep2Component} from './sfruttamento-ansy/assocazione-conto-step2/assocazione-conto-step2.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Anagrafiche Conti',
        },
        children: [
            {
                path: '',
                component: RicercaContiComponent,
                data: {
                    title: 'Anagrafiche Conti',
                    roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL, EUserRole.ANAGRAFICHE_VISUALIZZATORE]
                },
                canActivate: [SecurityService]
            },
            {
                path: 'dettaglio',
                loadChildren: () => import('./dettaglio-conto/dettaglio-conto.module').then(m => m.DettaglioContoModule)
            },
            {
                path: 'inserimento',
                loadChildren: () => import('./inserimento-conto/inserimento-conto.module').then(m => m.InserimentoContoModule)
            },
            {
                path: 'modifica',
                component: ModificaContoComponent,
                data: {
                    title: 'Modifica Conto',
                    roles: [EUserRole.ANAGRAFICHE_SPI, EUserRole.ANAGRAFICHE_BIL]
                },
                canActivate: [SecurityService],
            },
            {
                path: 'eliminazione-logica',
                component: EliminazioneLogicaContoComponent,
                data: {
                    title: 'Eliminazione Logica Conto',
                    roles: [EUserRole.ANAGRAFICHE_SPI]
                },
                canActivate: [SecurityService],
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContiRoutingModule { }
