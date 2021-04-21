import { Routes } from '@angular/router';
import { NewFolderFormComponent } from './components/new-folder-form/new-folder-form.component';
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
      {
        path: 'new/folder',
        component: NewFolderFormComponent,
        // outlet: 'new-folder',
        // children: [
        //   {
        //     path: 'folder',
        //     component: NewFolderFormComponent,
        //     outlet: 'new-folder',
        //   }
        // ],
      },
      {
        path: 'test',
        loadChildren: () => import('../test/test.module').then(t => t.TestModule),
      },
    ],
  },
];
