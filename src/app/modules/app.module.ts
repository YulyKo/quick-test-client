import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../app.component';
import { HeaderComponent } from '../utils/UI/header/header.component';
import { AuthModule } from './auth/auth.module';
import { WebsiteModule } from './website/website.module';
import { MentorPanelModule } from './mentor-panel/mentor-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    AuthModule,
    WebsiteModule,
    MentorPanelModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
