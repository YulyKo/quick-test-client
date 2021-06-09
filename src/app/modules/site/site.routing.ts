import { Routes } from '@angular/router';
import { HelpPageComponent } from './help-page/help-page.view';
import { HomePageComponent } from './home-page/home-page.view';

export const siteRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'help',
    component: HelpPageComponent,
  }
];
