import { TestBed } from '@angular/core/testing';

import { MoleculesService } from './molecules.service';

describe('MoleculesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MoleculesService = TestBed.get(MoleculesService);
    expect(service).toBeTruthy();
  });
});
