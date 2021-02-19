import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorPanelComponent } from 'src/app/components/mentor-panel/mentor-panel.component';
import { MentorPanelViewsComponent } from 'src/app/views/mentor-panel-views/mentor-panel-views.component';

@NgModule({
  declarations: [
    MentorPanelComponent,
    MentorPanelViewsComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MentorPanelModule { }
