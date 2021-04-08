import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingAnswersListFormComponent } from './creating-answers-list-form.component';

describe('CreatingAnswersListFormComponent', () => {
  let component: CreatingAnswersListFormComponent;
  let fixture: ComponentFixture<CreatingAnswersListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingAnswersListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingAnswersListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
