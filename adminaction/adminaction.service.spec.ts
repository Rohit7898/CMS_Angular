import { TestBed } from '@angular/core/testing';

import { AdminactionService } from './adminaction.service';

describe('AdminactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminactionService = TestBed.get(AdminactionService);
    expect(service).toBeTruthy();
  });
});
