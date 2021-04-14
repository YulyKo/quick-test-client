import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UIModule } from '../UI/ui.module';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { RegisterView } from './views/register/register.view';
import { LoginView } from './views/login/login.view';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';
import { QuestionModule } from '../mentor/questions/question.module';

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
    QuestionModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(authRoutes),
  ],
  providers: [AuthService]
})
export class AuthModule { }
