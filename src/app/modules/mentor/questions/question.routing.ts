import { Routes } from '@angular/router';
import { MentorGuard } from '../mentor.guard';
import { CreatingQuestionView } from './views/creating-question-view/creating-question.view';

export const questionRoutes: Routes = [
  {
    path: 'home/new-question',
    component: CreatingQuestionView,
    canActivate: [MentorGuard],
  },
];
