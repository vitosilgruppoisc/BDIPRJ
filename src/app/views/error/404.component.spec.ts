import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { P404Component } from './404.component';

describe('P404Component', () => {
	let component: P404Component;
	let fixture: ComponentFixture<P404Component>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterModule,
				RouterTestingModule
			],
			declarations: [
				P404Component
			],
            providers: [
            ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		// We inject our service (which imports the HttpClient) and the Test Controller
		fixture = TestBed.createComponent(P404Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
