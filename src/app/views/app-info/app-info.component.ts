import { IVersion, DEFAULT_VERSION } from './../../models/version-model';
import { Component, OnInit, Input } from '@angular/core';
import { ActiveModal } from 'scam-bdi-uikit';


@Component({
    templateUrl: 'app-info.component.html',
    providers: [ActiveModal]
})
export class AppInfoComponent implements OnInit {
    
    @Input()
    frontend: IVersion = DEFAULT_VERSION;

    constructor(public activeModal: ActiveModal) { }

    ngOnInit() { }
}
