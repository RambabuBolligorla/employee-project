import { TestBed } from '@angular/core/testing';

import { CreateemployeeService } from './createemployee.service';

describe('CreateemployeeService', () => {
  let service: CreateemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
