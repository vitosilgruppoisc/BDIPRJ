import { Component, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { SidebarNavHelper } from '../app-sidebar-nav.service';
import { NavData } from '../../../_nav';

@Component({
	selector: 'app-sidebar-nav-link',
	templateUrl: './app-sidebar-nav-link.component.html',
	styles: [
		`
			.nav-pad-1 {
				padding-left: 2rem;
			}
			.nav-pad-2 {
				padding-left: 3rem;
			}
			.nav-pad-3 {
				padding-left: 4rem;
			}
		`
	],
	providers: [SidebarNavHelper]
})
export class AppSidebarNavLinkComponent implements OnInit {
	@Input() item: NavData;
	public linkType: string;
	public href: string;

	private classes = { 'nav-link': true };

	constructor(
		@Inject(DOCUMENT) private document: any,
		private renderer: Renderer2,
		public helper: SidebarNavHelper,
		private router: Router
	) { }

	ngOnInit() {
		this.linkType = this.isExternalLink() ? 'external' : 'link';
		this.href = this.isDisabled() ? '' : this.item.url;
	}

	public getLinkClass() {
		const disabled = this.isDisabled();
		this.classes['disabled'] = disabled;
		this.classes['btn-link'] = disabled;
		if (this.hasVariant()) {
			const variant = `nav-link-${this.item.variant}`;
			this.classes[variant] = true;
		}
		if (this.item.indent && this.item.indent>0) {
			this.classes[`nav-pad-${this.item.indent}`] = true;
		}
		return this.classes;
	}

	public getLinkType() {
		return this.linkType;
	}

	public hasVariant() {
		return !!this.item.variant;
	}

	public isDisabled() {
		return (this.item.attributes && this.item.attributes.disabled) ? true : null;
	}

	public isExternalLink() {
		return this.item.url.substring(0, 4) === 'http';
	}

	public hideMobile(uri) {
		if (this.document.body.classList.contains('sidebar-show')) {
			this.renderer.removeClass(this.document.body, 'sidebar-show');
		}
		this.redirectTo(uri);
	}

	public redirectTo(uri) {
		this.router.navigateByUrl('/app', {skipLocationChange: true}).then(() =>
		this.router.navigate([uri]));
	  }
}
