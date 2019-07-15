import { TestBed } from '@angular/core/testing';

import { UserentryService } from './userentry.service';

describe('UserentryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserentryService = TestBed.get(UserentryService);
    expect(service).toBeTruthy();
  });
});
