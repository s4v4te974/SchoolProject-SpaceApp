import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheVilleComponent } from './recherche-ville.component';

describe('RechercheVilleComponent', () => {
  let component: RechercheVilleComponent;
  let fixture: ComponentFixture<RechercheVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
