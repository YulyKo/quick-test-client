import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingTestViewComponent } from './creating-test-view.component';

describe('CreatingTestViewComponent', () => {
  let component: CreatingTestViewComponent;
  let fixture: ComponentFixture<CreatingTestViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatingTestViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingTestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
