import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { meanOfPaiementResolver } from './mean-of-paiement.resolver';

describe('meanOfPaiementResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => meanOfPaiementResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
