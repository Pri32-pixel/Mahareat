import { TestBed } from '@angular/core/testing';

import { JudgementapiService } from './judgementapi.service';

describe('JudgementapiService', () => {
  let service: JudgementapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JudgementapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
