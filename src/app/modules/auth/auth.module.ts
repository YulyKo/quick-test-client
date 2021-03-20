import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from 'src/app/components/auth/auth.component';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { RegistrationComponent } from 'src/app/components/auth/registration/registration.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginViewComponent,
    RegisterViewComponent,
    ErrorMessageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
