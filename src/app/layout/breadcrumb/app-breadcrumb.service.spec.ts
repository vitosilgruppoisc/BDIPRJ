import { TestBed } from '@angular/core/testing';
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppBreadcrumbService', () => {

	let service: AppBreadcrumbService;

	beforeEach(() => TestBed.configureTestingModule({
		imports: [
			RouterModule,
			RouterTestingModule
		],
		providers: [
			AppBreadcrumbService
		]
	}));

	beforeEach(() => {
		// We inject our service (which imports the HttpClient) and the Test Controller
		service = TestBed.get(AppBreadcrumbService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

});
