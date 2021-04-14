import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ErrorMessageComponent,
    HeaderComponent,
  ],
  providers: []
})
export class UIModule { }
