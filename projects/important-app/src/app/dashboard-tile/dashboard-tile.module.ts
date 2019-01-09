import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DashboardTileComponent } from './dashboard-tile.component';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardTileComponent
  ],
  exports: [
    DashboardTileComponent
  ],
  entryComponents: [
    // TODO: Add DashboardTileComponent
    DashboardTileComponent
    // END
  ]
})
export class DashboardTileModule { 

  constructor(private injector: Injector) {

    // TODO: Wrap DashboardTileComponent as a web component and register it
    const tileElm = createCustomElement(DashboardTileComponent, { injector: this.injector });
    customElements.define('dashboard-tile', tileElm);
    // END
  }

}
