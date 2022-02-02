import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LokiBreadcrumbComponent } from './loki-breadcrumb.component';
import { RouterModule } from '@angular/router';
import { AppBreadcrumbService } from './app-breadcrumb.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('LokiBreadcrumbComponent', () => {
	let component: LokiBreadcrumbComponent;
	let fixture: ComponentFixture<LokiBreadcrumbComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterModule,
				RouterTestingModule
			],
			declarations: [
				LokiBreadcrumbComponent
			],
            providers: [
				AppBreadcrumbService
            ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		// We inject our service (which imports the HttpClient) and the Test Controller
		fixture = TestBed.createComponent(LokiBreadcrumbComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

}); 
