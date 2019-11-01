import { TestBed } from '@angular/core/testing';

import { IndiantransactionService } from './indiantransaction.service';

describe('IndiantransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndiantransactionService = TestBed.get(IndiantransactionService);
    expect(service).toBeTruthy();
  });
});
