import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginView } from './views/login/login.view';
import { RegisterView } from './views/register/register.view';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginView,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth/register',
    component: RegisterView,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
