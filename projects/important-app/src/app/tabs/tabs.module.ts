import { createCustomElement } from '@angular/elements';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabComponent } from './tab.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TabsComponent, TabComponent],
  exports: [TabsComponent, TabComponent],
  entryComponents: [TabsComponent, TabComponent]
})
export class TabsModule { 

  constructor(injector: Injector) {

    const tabsElm = createCustomElement(TabsComponent, { injector });
    customElements.define('my-tabs', tabsElm);
    
    const tabElm = createCustomElement(TabComponent, { injector });
    customElements.define('my-tab', tabElm);
  }

}
