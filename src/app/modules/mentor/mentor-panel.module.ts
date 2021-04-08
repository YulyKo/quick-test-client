import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorPanelRoutingModule } from './mentor-panel-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FolderView } from './folders/views/folder-view/folder.view';
import { UIModule } from '../UI/ui.module';
import { QuestionModule } from './questions/question.module';

@NgModule({
  declarations: [
    FolderView,
  ],
  imports: [
    UIModule,
    QuestionModule,
    CommonModule,
    MentorPanelRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
})
export class MentorPanelModule { }
