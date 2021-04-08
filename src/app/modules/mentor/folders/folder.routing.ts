import { Routes } from '@angular/router';
import { MentorGuard } from '../mentor.guard';
import { CreatingQuestionView } from '../questions/views/creating-question-view/creating-question.view';

export const folderRoutes: Routes = [
  {
    path: 'home/new-question',
    component: CreatingQuestionView,
    canActivate: [MentorGuard],
  },
];
