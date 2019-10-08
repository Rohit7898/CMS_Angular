import { TestBed } from '@angular/core/testing';

import { EmployeetransactionService } from './employeetransaction.service';

describe('EmployeetransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeetransactionService = TestBed.get(EmployeetransactionService);
    expect(service).toBeTruthy();
  });
});
