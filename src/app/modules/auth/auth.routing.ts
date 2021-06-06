import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginView } from './views/login/login.view';
import { RegisterView } from './views/register/register.view';

export const authRoutes: Routes = [
  {
    path: 'auth/login',
    component: LoginView,
    canActivate: [AuthGuard],
  },
  {
    path: 'auth/registration',
    component: RegisterView,
    canActivate: [AuthGuard],
  },
  {
    path: 'home/:id',
    loadChildren: () => import('../folders/folder.module').then(f => f.FolderModule),
  },
];
