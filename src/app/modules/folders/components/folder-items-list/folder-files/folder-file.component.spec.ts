import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderFileComponent } from './folder-file.component';

describe('FolderItemComponent', () => {
  let component: FolderFileComponent;
  let fixture: ComponentFixture<FolderFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
