import { TestBed } from '@angular/core/testing';

import { AmericanProfileService } from './american-profile.service';

describe('AmericanProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmericanProfileService = TestBed.get(AmericanProfileService);
    expect(service).toBeTruthy();
  });
});
