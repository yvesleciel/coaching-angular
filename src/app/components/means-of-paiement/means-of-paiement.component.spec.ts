import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeansOfPaiementComponent } from './means-of-paiement.component';

describe('MeansOfPaiementComponent', () => {
  let component: MeansOfPaiementComponent;
  let fixture: ComponentFixture<MeansOfPaiementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeansOfPaiementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeansOfPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
