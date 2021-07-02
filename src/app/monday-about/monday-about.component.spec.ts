import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondayAboutComponent } from './monday-about.component';

describe('MondayAboutComponent', () => {
  let component: MondayAboutComponent;
  let fixture: ComponentFixture<MondayAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondayAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
