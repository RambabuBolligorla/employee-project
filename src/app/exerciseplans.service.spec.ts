import { TestBed } from '@angular/core/testing';

import { ExerciseplansService } from './exerciseplans.service';

describe('ExerciseplansService', () => {
  let service: ExerciseplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
