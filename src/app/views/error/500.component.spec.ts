import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { P500Component } from './500.component';

describe('P500Component', () => {
	let component: P500Component;
	let fixture: ComponentFixture<P500Component>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterModule,
				RouterTestingModule
			],
			declarations: [
				P500Component
			],
            providers: [
            ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		// We inject our service (which imports the HttpClient) and the Test Controller
		fixture = TestBed.createComponent(P500Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
