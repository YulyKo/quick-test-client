import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./site/site.module').then(s => s.SiteModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import ('./auth/auth.module').then(a => a.AuthModule),
  },
  {
    path: 'auth/registration',
    loadChildren: () => import ('./auth/auth.module').then(a => a.AuthModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./mentor/mentor-panel.module').then(m => m.MentorPanelModule),
  },
  // {
  //   path: 'new-question',
  //   loadChildren: () => import('./mentor/questions/question.module').then(m => m.QuestionModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
