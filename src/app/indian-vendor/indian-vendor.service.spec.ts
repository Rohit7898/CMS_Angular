import { TestBed } from '@angular/core/testing';

import { IndianVendorService } from './indian-vendor.service';

describe('IndianVendorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndianVendorService = TestBed.get(IndianVendorService);
    expect(service).toBeTruthy();
  });
});
