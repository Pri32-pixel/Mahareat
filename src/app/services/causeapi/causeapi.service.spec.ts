import { TestBed } from '@angular/core/testing';

import { CauseapiService } from './causeapi.service';

describe('CauseapiService', () => {
  let service: CauseapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CauseapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
