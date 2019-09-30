import { TestBed } from '@angular/core/testing';

import { MexicanVendorService } from './mexican-vendor.service';

describe('MexicanVendorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MexicanVendorService = TestBed.get(MexicanVendorService);
    expect(service).toBeTruthy();
  });
});
