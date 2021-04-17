import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { UIModule } from './UI/ui.module';
import { AppComponent } from '../app.component';
import { SiteModule } from './site/site.module';
import { FolderModule } from './folders/folder.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FolderModule,
    AuthModule,
    SiteModule,
    BrowserModule,
    AppRoutingModule,
    UIModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
