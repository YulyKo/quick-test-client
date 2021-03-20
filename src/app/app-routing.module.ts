import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MentorGuard } from './guards/mentor.guard';
// import { LoginViewComponent } from './views/auth/login-view/login-view.component';
import { RegisterViewComponent } from './views/auth/register-view/register-view.component';
import { HomeViewComponent } from './views/mentor-panel-views/home/home-view.component';
import { WebsiteComponent } from './views/website/website.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  {
    path: 'home',
    component: HomeViewComponent,
    canActivate: [MentorGuard],
  },
  { path: 'auth',
    children: [
      {
        path: 'login',
        // component: LoginViewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'register',
        component: RegisterViewComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
