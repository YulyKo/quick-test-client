import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorPanelComponent } from './mentor-panel.component';

describe('MentorPanelComponent', () => {
  let component: MentorPanelComponent;
  let fixture: ComponentFixture<MentorPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
