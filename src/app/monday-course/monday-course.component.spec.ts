import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayCourseComponent } from './monday-course.component';

describe('MondayCourseComponent', () => {
  let component: MondayCourseComponent;
  let fixture: ComponentFixture<MondayCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondayCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
