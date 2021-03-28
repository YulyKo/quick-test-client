import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from '../views/website/website.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  {
    path: 'home/root',
    loadChildren: () => import('./mentor-panel/mentor-panel.module').then(m => m.MentorPanelModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import ('./auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: 'auth/registration',
    loadChildren: () => import ('./auth/auth.module').then(a => a.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
