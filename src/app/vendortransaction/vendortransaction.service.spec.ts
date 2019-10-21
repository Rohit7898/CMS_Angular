import { TestBed } from '@angular/core/testing';

import { VendortransactionService } from './vendortransaction.service';

describe('VendortransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendortransactionService = TestBed.get(VendortransactionService);
    expect(service).toBeTruthy();
  });
});
