import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EnumFilter } from 'src/app/utils/EnumFilterPipe/EnumFiltePipe.pipe';
import { UIModule } from '../UI/ui.module';
import { CreatingQuestionView } from './views/creating-question-view/creating-question.view';
import { NewQuestionFormComponent } from './components/new-question-form/new-question-form.component';
import { CreatingAnswersListFormComponent } from './components/creating-answers-list-form/creating-answers-list-form.component';
import { RouterModule } from '@angular/router';
import { questionRoutes } from './question.routing';
import { QuestionService } from './question.service';
import { EnumFilterPipeModule } from 'src/app/utils/EnumFilterPipe/EnumFiltePipe.module';
import { HttpHeadersService } from 'src/app/utils/services/http-headers-service/http-headers.service';
import { ListOfQuestionsComponent } from './components/common/list-of-questions/list-of-questions.component';
import { QuestionCardComponent } from './components/common/list-of-questions/question-card/question-card.component';
import { SelectedQuestionService } from 'src/app/utils/services/selected-elements-services/selected-question.service';

@NgModule({
  declarations: [
    CreatingQuestionView,
    NewQuestionFormComponent,
    CreatingAnswersListFormComponent,
    ListOfQuestionsComponent,
    QuestionCardComponent,
  ],
  imports: [
    UIModule,
    CommonModule,
    EnumFilterPipeModule,
    ReactiveFormsModule,
    RouterModule.forChild(questionRoutes),
  ],
  exports: [ListOfQuestionsComponent],
  providers: [
    QuestionService,
    HttpHeadersService,
    SelectedQuestionService,
  ],
})
export class QuestionModule { }
