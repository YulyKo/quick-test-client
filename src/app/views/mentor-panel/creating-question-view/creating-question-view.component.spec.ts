import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingQuestionViewComponent } from './creating-question-view.component';

describe('CreatingTestViewComponent', () => {
  let component: CreatingQuestionViewComponent;
  let fixture: ComponentFixture<CreatingQuestionViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingQuestionViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
