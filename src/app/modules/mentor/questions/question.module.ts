import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeFilter } from 'src/app/utils/Timer.pipe';
import { UIModule } from '../../UI/ui.module';
import { CreatingQuestionView } from './views/creating-question-view/creating-question.view';
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';
import { CreatingAnswersListFormComponent } from './components/creating-answers-list-form/creating-answers-list-form.component';
import { RouterModule } from '@angular/router';
import { questionRoutes } from './question.routing';
import { QuestionService } from './question.service';

@NgModule({
  declarations: [
    CreatingQuestionView,
    NewQuestionFormComponent,
    CreatingAnswersListFormComponent,
    TimeFilter,
  ],
  imports: [
    UIModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(questionRoutes),
  ],
  providers: [QuestionService],
})
export class QuestionModule { }
