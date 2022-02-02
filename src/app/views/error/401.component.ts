import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	templateUrl: '401.component.html'
})
export class P401Component implements OnInit {

	returnUrl: string;

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		// get return url from route parameters or default to '/'
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		console.log('got returnUrl '+ this.returnUrl);
	}

	goHome() {
		this.router.navigate(['/']);
	}

}
