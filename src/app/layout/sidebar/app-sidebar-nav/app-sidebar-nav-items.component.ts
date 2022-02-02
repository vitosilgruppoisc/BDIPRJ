import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../../../services';
import { NavData } from '../../../_nav';
import { SidebarNavHelper } from '../app-sidebar-nav.service';

@Component({
  selector: 'app-sidebar-nav-items',
  template: `
    <ng-container *ngFor="let item of items">
      <ng-container *ngIf="isVisible(item)" [ngSwitch]="helper.itemType(item)">
        <app-sidebar-nav-dropdown
          *ngSwitchCase="'dropdown'"
          [item]="item"
          [class.open]="helper.isActive(router, item)"
          [ngClass]="helper.getClass(item)"
          appNavDropdown
          routerLinkActive="open">
        </app-sidebar-nav-dropdown>
        <app-sidebar-nav-divider
          *ngSwitchCase="'divider'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-divider>
        <app-sidebar-nav-title
          *ngSwitchCase="'title'"
          [item]="item"
          [ngClass]="helper.getClass(item)"
          [appHtmlAttr]="item.attributes">
        </app-sidebar-nav-title>
        <app-sidebar-nav-label
          *ngSwitchCase="'label'"
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </app-sidebar-nav-label>
        <ng-container
          *ngSwitchCase="'empty'">
        </ng-container>
        <app-sidebar-nav-link
          *ngSwitchDefault
          [item]="item"
          class="nav-item"
          [ngClass]="helper.getClass(item)">
        </app-sidebar-nav-link>
      </ng-container>
    </ng-container>
  `
})
export class AppSidebarNavItemsComponent {

  @Input() items: Array<NavData>;

  constructor(
    public helper: SidebarNavHelper,
    private router: Router, // Used for template binding, do not remove
    private securityService: SecurityService) {
  }

  isVisible(item: NavData): boolean {
    if (item.requiredRoles) {
      return this.securityService.checkPermissions(item.requiredRoles);
    }
    // else no restriction
    return true;
  }
}
