import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './layout';
import { P401Component } from './views/error/401.component';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import {P403Component} from "./views/error/403.component";
import { HomeComponent } from './views/home/home.component';
import { HomeModule } from './views/home/home.module';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'error/401',
        component: P401Component,
        data: {
            title: 'Accesso non Autorizzato'
        }
    },
    {
        path: 'error/403',
        component: P403Component,
        data: {
            title: 'Accesso vietato'
        }
    },
    {
        path: 'error/404',
        component: P404Component,
        data: {
            title: 'Risorsa non trovata'
        }
    },
    {
        path: 'error/500',
        component: P500Component,
        data: {
            title: 'Errore generico'
        }
    },
    {
        path: '',
        component: DefaultLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                data: {
                    title: 'Home'
                },
                component:HomeComponent
            },
            {
                path: 'core',
                data: {
                    title: 'Gepa - Core'
                },
                loadChildren: () => import('./views/dashboard/core-routing.module').then(m => m.CoreRoutingModule)
            },
            {
                path: 'anagrafiche',
                data: {
                    title: 'Anagrafiche'
                },
                loadChildren: () => import('./views/anagrafiche/anagrafiche-routing.module').then(m => m.AnagraficheRoutingModule)
            }
        ]
    },
    { path: '**', component: P404Component }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}), HomeModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }
