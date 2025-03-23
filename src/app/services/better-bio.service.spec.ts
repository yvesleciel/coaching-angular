import { TestBed } from '@angular/core/testing';

import { BetterBioService } from './better-bio.service';

describe('BetterBioService', () => {
  let service: BetterBioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetterBioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
