import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeanOfPaiementDetailComponent } from './mean-of-paiement-detail.component';

describe('MeanOfPaiementDetailComponent', () => {
  let component: MeanOfPaiementDetailComponent;
  let fixture: ComponentFixture<MeanOfPaiementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeanOfPaiementDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeanOfPaiementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
