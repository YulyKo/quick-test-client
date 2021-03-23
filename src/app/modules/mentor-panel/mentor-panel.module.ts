import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorPanelComponent } from 'src/app/components/mentor-panel/mentor-panel.component';
import { MentorPanelViewsComponent } from 'src/app/views/mentor-panel-views/mentor-panel-views.component';
import { HomeViewComponent } from 'src/app/views/mentor-panel-views/home/home-view.component';
import { MentorPanelRoutingModule } from './mentor-panel-routing.module';

@NgModule({
  declarations: [
    MentorPanelComponent,
    MentorPanelViewsComponent,
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    MentorPanelRoutingModule,
  ]
})
export class MentorPanelModule { }
