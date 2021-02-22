import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { RegistrationComponent } from 'src/app/components/auth/registration/registration.component';
import { AuthViewComponent } from 'src/app/views/auth-view/auth-view.component';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
    AuthViewComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AuthModule { }
