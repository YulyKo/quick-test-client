import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorPanelViewsComponent } from './mentor-panel-views.component';

describe('MentorPanelViewsComponent', () => {
  let component: MentorPanelViewsComponent;
  let fixture: ComponentFixture<MentorPanelViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorPanelViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorPanelViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
