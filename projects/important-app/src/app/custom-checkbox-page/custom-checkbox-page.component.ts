import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-checkbox-page',
  templateUrl: './custom-checkbox-page.component.html',
  styleUrls: ['./custom-checkbox-page.component.css']
})
export class CustomCheckboxPageComponent {

  value1: boolean = false;
  value2: boolean = false;

  changed($event) {
    console.debug('changed', $event.detail);
    this.value1 = $event.detail;
  }

}
