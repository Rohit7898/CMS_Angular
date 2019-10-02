import { TestBed } from '@angular/core/testing';

import { IndianprofileService } from './indianprofile.service';

describe('IndianprofileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndianprofileService = TestBed.get(IndianprofileService);
    expect(service).toBeTruthy();
  });
});
