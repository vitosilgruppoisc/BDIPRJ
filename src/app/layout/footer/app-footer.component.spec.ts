import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppFooterComponent } from './app-footer.component';

describe('AppFooterComponent', () => {
	let component: AppFooterComponent;
	let fixture: ComponentFixture<AppFooterComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
			],
			declarations: [
				AppFooterComponent
			],
            providers: [
            ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		// We inject our service (which imports the HttpClient) and the Test Controller
		fixture = TestBed.createComponent(AppFooterComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

}); 
