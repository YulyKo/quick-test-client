import { Routes } from '@angular/router';
import { FolderView } from './views/folder-view/folder.view';

export const folderRoutes: Routes = [
  {
    path: 'home/:id',
    component: FolderView,
    children: [
      {
        path: 'new-question',
        loadChildren: () => import('../questions/question.module').then(q => q.QuestionModule),
      },
    ],
  },
];
