import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'app-tab',
  template: `
    <div id="tab">

      <h2>{{title}}</h2>

      <div id="content">
        
      <!-- TODO: Display projected data (from the default slot w/o a name) here-->

        <div class="small">
        
        <!-- TODO: Display projected footer here-->

        </div>
      </div>

    </div>
  `,
  styles: [`
    #tab {
      padding: 20px;
      border-top: 2px black solid;
      border-bottom: 2px black solid;
      border-radius: 5px;
      margin-bottom:20px;
    }

    #tab h2 {
      margin-top:0px;
    }

    .small {
      font-size:8px;
      margin-top:20px;
    }
  `],
   encapsulation: ViewEncapsulation.ShadowDom
})
export class TabComponent {
  @Input() title: string;
}
