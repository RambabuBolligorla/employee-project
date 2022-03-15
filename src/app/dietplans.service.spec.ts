import { TestBed } from '@angular/core/testing';

import { DietplansService } from './dietplans.service';

describe('DietplansService', () => {
  let service: DietplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
