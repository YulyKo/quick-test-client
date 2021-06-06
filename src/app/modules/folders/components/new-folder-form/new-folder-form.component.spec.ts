import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFolderFormComponent } from './new-folder-form.component';

describe('NewFolderFormComponent', () => {
  let component: NewFolderFormComponent;
  let fixture: ComponentFixture<NewFolderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFolderFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFolderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
