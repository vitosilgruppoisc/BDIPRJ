import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
	// tslint:disable-next-line
	selector: 'loki-root',
	template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit, OnDestroy {

	private routerSub: Subscription;

	constructor(private router: Router) { }

	ngOnInit() {
		this.router.events.pipe(
				filter(evt => evt instanceof NavigationEnd)
			).subscribe( () => window.scrollTo(0,0));
	}

	ngOnDestroy() {
		if (this.routerSub) {
			this.routerSub.unsubscribe();
		}
	}
}
