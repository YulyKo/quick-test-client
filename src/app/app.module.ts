import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './views/website/website.component';
import { AuthComponent } from './auth/auth.component';
import { MentorPanelComponent } from './components/mentor-panel/mentor-panel.component';
import { HeaderComponent } from './utils/UI/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    MentorPanelComponent,
    AuthComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
