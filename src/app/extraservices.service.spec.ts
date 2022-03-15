import { TestBed } from '@angular/core/testing';

import { ExtraservicesService } from './extraservices.service';

describe('ExtraservicesService', () => {
  let service: ExtraservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
