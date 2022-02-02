import {Component, Input, NgZone, OnInit} from '@angular/core';
import {InfoPanelModel} from '../../../models/info-panel-model';
import {NavigationExtras, Router} from '@angular/router';
import {TooltipDirective} from "scam-bdi-uikit";

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanelComponent implements OnInit {

  model: InfoPanelModel;
  @Input('model') set modelValue(value: InfoPanelModel) {
    console.log('value', value);
    this.model = value;
  }

  constructor(private ngZone: NgZone, private router: Router) {}

  ngOnInit() {
  }

  navigate(route, routeParam: any, sessionKey: any) {
    this.ngZone.run(() => {
      let navigationExtras: NavigationExtras = {};
      if (!!sessionKey) {
        sessionStorage.setItem(sessionKey, JSON.stringify(routeParam));
      } else {
        navigationExtras = {
          queryParams: routeParam
        };
      }
      this.router.navigate([route], navigationExtras);
    });
  }
}


