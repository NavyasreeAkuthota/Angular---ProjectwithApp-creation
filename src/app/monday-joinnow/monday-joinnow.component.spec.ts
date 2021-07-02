import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayJoinnowComponent } from './monday-joinnow.component';

describe('MondayJoinnowComponent', () => {
  let component: MondayJoinnowComponent;
  let fixture: ComponentFixture<MondayJoinnowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondayJoinnowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayJoinnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
