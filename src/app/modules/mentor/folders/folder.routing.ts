import { Routes } from '@angular/router';

export const folderRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '/new-question',
        loadChildren: () => import('../questions/question.module').then(q => q.QuestionModule),
      },
    ],
  }
];
