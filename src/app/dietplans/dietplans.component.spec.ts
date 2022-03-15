import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietplansComponent } from './dietplans.component';

describe('DietplansComponent', () => {
  let component: DietplansComponent;
  let fixture: ComponentFixture<DietplansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietplansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
