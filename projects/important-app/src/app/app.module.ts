import { CustomCheckboxDirective } from './custom-check-box/custom-checkbox.directive';
import {HttpClientModule} from '@angular/common/http';

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {APP_ROUTES} from './app.routes';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SharedModule} from './shared/shared.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import { HelloWorldPageComponent } from './hello-world-page/hello-world-page.component';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      SharedModule.forRoot(),
      RouterModule.forRoot(APP_ROUTES)
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      HelloWorldPageComponent,
      CustomCheckboxDirective
   ],
   providers: [],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
