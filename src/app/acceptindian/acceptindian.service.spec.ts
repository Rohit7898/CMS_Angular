import { TestBed } from '@angular/core/testing';

import { AcceptindianService } from './acceptindian.service';

describe('AcceptindianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AcceptindianService = TestBed.get(AcceptindianService);
    expect(service).toBeTruthy();
  });
});
