import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { WebsiteComponent } from './views/website/website.component';

const routes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'auth/:type',
    component: AuthViewComponent,
  },
];
// children: [
//   { path: 'login', component: LoginComponent },
//   { path: 'registration', component: RegistrationComponent },
// ],
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
