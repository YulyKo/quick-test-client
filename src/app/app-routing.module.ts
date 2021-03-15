import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './views/auth/login-view/login-view.component';
import { RegisterViewComponent } from './views/auth/register-view/register-view.component';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
