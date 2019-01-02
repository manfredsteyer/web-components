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
    path: '**',
    redirectTo: 'home'
  }
]
