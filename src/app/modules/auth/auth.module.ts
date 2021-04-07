import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { RegistrationComponent } from 'src/app/components/auth/registration/registration.component';
import { LoginViewComponent } from 'src/app/views/auth/login-view/login-view.component';
import { RegisterViewComponent } from 'src/app/views/auth/register-view/register-view.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { UIModule } from '../UI/ui.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginViewComponent,
    RegisterViewComponent,
  ],
  imports: [
    UIModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthRoutingModule,
  ],
  providers: [AuthService]
})
export class AuthModule { }
