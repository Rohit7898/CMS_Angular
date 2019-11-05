import { TestBed } from '@angular/core/testing';

import { EditmodalService } from './editmodal.service';

describe('EditmodalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditmodalService = TestBed.get(EditmodalService);
    expect(service).toBeTruthy();
  });
});
