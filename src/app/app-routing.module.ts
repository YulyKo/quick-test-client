import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
// import { ExitGuard } from './guards/exit.guard';
import { LoginViewComponent } from './views/auth/login-view/login-view.component';
import { RegisterViewComponent } from './views/auth/register-view/register-view.component';
import { HomePageComponent } from './views/mentor-panel-views/home-page/home-page.component';
import { WebsiteComponent } from './views/website/website.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginViewComponent,
      },
      {
        path: 'register',
        component: RegisterViewComponent,
      },
    ],
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
