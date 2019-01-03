import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { CustomCheckboxPageComponent } from './custom-checkbox-page/custom-checkbox-page.component';
import {ExtraOptions, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { HelloWorldPageComponent } from './hello-world-page/hello-world-page.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'hello-world',
    component: HelloWorldPageComponent
  },
  {
    path: 'custom-checkbox',
    component: CustomCheckboxPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'tabs',
    component: TabsPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]
