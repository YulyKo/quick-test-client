import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mentorRoutes } from './mentor-panel.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { UIModule } from '../UI/ui.module';
import { QuestionModule } from './questions/question.module';
import { MentorView } from './mentor-view/mentor.view';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MentorView,
  ],
  imports: [
    UIModule,
    QuestionModule,
    CommonModule,
    RouterModule,
    RouterModule.forChild(mentorRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
})
export class MentorPanelModule { }
