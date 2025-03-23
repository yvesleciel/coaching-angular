import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { meanOfPaiementGuard } from './mean-of-paiement.guard';

describe('meanOfPaiementGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => meanOfPaiementGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
