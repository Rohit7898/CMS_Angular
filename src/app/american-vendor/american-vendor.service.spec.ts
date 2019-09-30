import { TestBed } from '@angular/core/testing';

import { AmericanVendorService } from './american-vendor.service';

describe('AmericanVendorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmericanVendorService = TestBed.get(AmericanVendorService);
    expect(service).toBeTruthy();
  });
});
