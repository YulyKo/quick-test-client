import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorPanelRoutingModule } from './mentor-panel-routing.module';
import { CreatingTestViewComponent } from 'src/app/views/mentor-panel/creating-test-view/creating-test-view.component';
import { FolderViewComponent } from 'src/app/views/mentor-panel/folder-view/folder-view.component';

@NgModule({
  declarations: [
    CreatingTestViewComponent,
    FolderViewComponent,
  ],
  imports: [
    CommonModule,
    MentorPanelRoutingModule,
  ]
})
export class MentorPanelModule { }
