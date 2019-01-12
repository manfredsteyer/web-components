import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
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
import { CustomCheckboxModule } from './custom-checkbox/custom-checkbox.module';
import { CustomCheckboxPageComponent } from './custom-checkbox-page/custom-checkbox-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardTileModule } from './dashboard-tile/dashboard-tile.module';
import { TabsPageComponent } from './tabs-page/tabs-page.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabsModule } from './tabs/tabs.module';
import { DemoComponent } from './demo/demo.component';
import { DemoModule } from './demo/demo.module';

@NgModule({
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      SharedModule.forRoot(),
      RouterModule.forRoot(APP_ROUTES),
      DemoModule,
      CustomCheckboxModule,
      DashboardTileModule,
      TabsModule
   ],
   declarations: [
      AppComponent,
      SidebarComponent,
      NavbarComponent,
      HomeComponent,
      HelloWorldPageComponent,
      CustomCheckboxPageComponent,
      DashboardPageComponent,
      TabsPageComponent
   ],
   providers: [],
   schemas: [
      //TODO: Add CUSTOM_ELEMENTS_SCHEMA
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {
}
