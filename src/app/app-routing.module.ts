import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorGuard } from './guards/mentor.guard';
import { HomeViewComponent } from './views/mentor-panel-views/home/home-view.component';
import { WebsiteComponent } from './views/website/website.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  {
    path: 'home',
    component: HomeViewComponent,
    canActivate: [MentorGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/mentor-panel/mentor-panel.module').then(m => m.MentorPanelModule)
  },
  {
    path: 'auth/login',
    loadChildren: () => import ('./modules/auth/auth.module').then(a => a.AuthModule)
  },
  {
    path: 'auth/registration',
    loadChildren: () => import ('./modules/auth/auth.module').then(a => a.AuthModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
