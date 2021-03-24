import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorPanelRoutingModule } from './mentor-panel-routing.module';
import { CreatingQuestionViewComponent } from 'src/app/views/mentor-panel/creating-question-view/creating-question-view.component';
import { FolderViewComponent } from 'src/app/views/mentor-panel/folder-view/folder-view.component';
import { NewQuestionFormComponent } from 'src/app/components/mentor-panel/new-question-form/new-question-form.component';

@NgModule({
  declarations: [
    CreatingQuestionViewComponent,
    FolderViewComponent,
    NewQuestionFormComponent,
  ],
  imports: [
    CommonModule,
    MentorPanelRoutingModule,
  ]
})
export class MentorPanelModule { }
