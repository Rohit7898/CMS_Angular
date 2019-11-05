import { TestBed } from '@angular/core/testing';

import { DatapassageService } from './datapassage.service';

describe('DatapassageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatapassageService = TestBed.get(DatapassageService);
    expect(service).toBeTruthy();
  });
});
