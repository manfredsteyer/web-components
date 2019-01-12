import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  template: `
  <div id="tabs">

    <div>
      <!-- 
        TODO: Just notice that there is tabs array with
        all the projected tabs. Its iterated to generate
        links for showing and hiding them.
      -->
      <div class="tab-key" *ngFor="let tab of tabs">
        <a (click)="activate(tab)">{{tab.title}}</a>
      </div>
    </div>

    <div  style="clear:both;">
      <!-- TODO: Bind the slotChange($event) method
           to this slot's slotchange event 
      -->
      
      <slot (slotchange)="slotChange($event)"></slot>

    </div>

  </div>
  `,
  styles: [`
    .tab-key {
      padding:20px;
      text-decoration: underline;
      cursor: pointer;
      float:left;
    }
  `],
   encapsulation: ViewEncapsulation.ShadowDom
})
export class TabsComponent {

  tabs: TabComponent[] = [];

  constructor() { }

  slotChange($event) {

    this.tabs = $event.target.assignedNodes();
    
    if (this.tabs.length > 0) {
      this.activate(this.tabs[0]);
    }
    
    
    // TODO: 
    //   - only display the first projected tab
    //   - put all projected tab element into the tabs array above
    // HINTS: 
    //   - $event.target.assignedNodes(); get you all projected nodes
    //   - You can hide any dom element using elm['hidden'] = true

  }

  activate(tab: TabComponent) {
    for(let t of this.tabs) {
      t['hidden'] = true;
    }
    tab['hidden'] = false;
  }

}
