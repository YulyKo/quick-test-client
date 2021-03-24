import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewQuestionFormComponent } from './new-question-form.component';

describe('NewQuestionFormComponent', () => {
  let component: NewQuestionFormComponent;
  let fixture: ComponentFixture<NewQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewQuestionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
