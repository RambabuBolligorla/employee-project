import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseplansComponent } from './exerciseplans.component';

describe('ExerciseplansComponent', () => {
  let component: ExerciseplansComponent;
  let fixture: ComponentFixture<ExerciseplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
