import { TestBed } from '@angular/core/testing';

import { MexicanprofileService } from './mexicanprofile.service';

describe('MexicanprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MexicanprofileService = TestBed.get(MexicanprofileService);
    expect(service).toBeTruthy();
  });
});
