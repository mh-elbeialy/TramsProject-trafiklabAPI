import { TestBed } from '@angular/core/testing';

import { TrafiklabService } from './trafiklab.service';

describe('TrafiklabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrafiklabService = TestBed.get(TrafiklabService);
    expect(service).toBeTruthy();
  });
});
