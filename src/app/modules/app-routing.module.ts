import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './site/home-page/home-page.view';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'home/root',
    loadChildren: () => import('./mentor/mentor-panel.module').then(m => m.MentorPanelModule)
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
