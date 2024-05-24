import { TestBed } from '@angular/core/testing';

import { CircularapiService } from './circularapi.service';

describe('CircularapiService', () => {
  let service: CircularapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircularapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
