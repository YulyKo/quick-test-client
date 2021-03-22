import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginViewComponent } from 'src/app/views/auth/login-view/login-view.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { RegisterViewComponent } from 'src/app/views/auth/register-view/register-view.component';

const routes: Routes = [
  {
    path: 'auth/login',
    component: LoginViewComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth/register',
    component: RegisterViewComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
