import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderItemsListComponent } from './folder-items-list.component';

describe('FolderItemsListComponent', () => {
  let component: FolderItemsListComponent;
  let fixture: ComponentFixture<FolderItemsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderItemsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
