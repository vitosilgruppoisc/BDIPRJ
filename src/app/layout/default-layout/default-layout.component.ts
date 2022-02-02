import {Component, OnDestroy, Inject, ViewChild, Renderer2, AfterViewInit, ViewEncapsulation} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { UserService, ConfigurationService } from '../../services';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {

    public navItems = navItems;
    public sidebarMinimized = true;
    private changes: MutationObserver;
    public element: HTMLElement;

    dataOperativa: string;
    environment: string;
    username: string;
    roles: string[];

    configSubscription: Subscription;
    envNavbarColorClass: string;

    constructor(public userService: UserService, private configurationService: ConfigurationService, private renderer: Renderer2, @Inject(DOCUMENT) _document?: any) {

        this.changes = new MutationObserver((mutations) => {
            this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
        });
        this.element = _document.body;
        this.changes.observe(<Element>this.element, {
            attributes: true,
            attributeFilter: ['class']
        });
        this.configSubscription = this.configurationService.config$.subscribe(config => {
            this.dataOperativa = config.dataOperativa;
            this.environment = config.environment;
            this.setEnvNavbarColorClass();
        });
        this.username = this.userService.getUsername();
        this.roles = this.userService.getAppRoles();
    }

    getUserAvatarImage(): string {
        if ("Anonymous" === this.userService.getUsername()) {
            return "assets/images/avatars/anonymous.png";
        }
        return "assets/images/avatars/user.png";
    }

    ngOnDestroy(): void {
        this.changes.disconnect();
        this.configSubscription.unsubscribe();
    }

    openAppInfoDialog() {

    }

    setEnvNavbarColorClass() {
        let colorClass = 'env-navbar-blue';
        if (this.environment !== 'PRODUCTION') {
            colorClass = 'env-navbar-green';
        }
        this.envNavbarColorClass = colorClass;
    }
}
