import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaOperazioniComponent } from './ricerca-operazioni.component';

describe('ChartComponent', () => {
  let component: RicercaOperazioniComponent;
  let fixture: ComponentFixture<RicercaOperazioniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaOperazioniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaOperazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
