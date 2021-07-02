import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayHomeComponent } from './monday-home.component';

describe('MondayHomeComponent', () => {
  let component: MondayHomeComponent;
  let fixture: ComponentFixture<MondayHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondayHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
