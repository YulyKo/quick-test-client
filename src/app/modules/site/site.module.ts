import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.view';
import { UIModule } from '../UI/ui.module';
import { RouterModule } from '@angular/router';
import { siteRoutes } from './site.routing';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    UIModule,
    RouterModule,
    RouterModule.forChild(siteRoutes),
  ]
})
export class SiteModule { }
