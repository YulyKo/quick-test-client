import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { UIModule } from '../UI/ui.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { RegisterView } from './views/register/register.view';
import { LoginView } from './views/login/login.view';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    LoginView,
    RegisterView,
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
