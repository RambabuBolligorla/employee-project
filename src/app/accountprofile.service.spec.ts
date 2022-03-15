import { TestBed } from '@angular/core/testing';

import { AccountprofileService } from './accountprofile.service';

describe('AccountprofileService', () => {
  let service: AccountprofileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountprofileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
