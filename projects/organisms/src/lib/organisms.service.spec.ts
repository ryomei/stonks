import { TestBed } from '@angular/core/testing';

import { OrganismsService } from './organisms.service';

describe('OrganismsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganismsService = TestBed.get(OrganismsService);
    expect(service).toBeTruthy();
  });
});
