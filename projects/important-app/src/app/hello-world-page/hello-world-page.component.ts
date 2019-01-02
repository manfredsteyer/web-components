import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world-page',
  templateUrl: './hello-world-page.component.html',
  styleUrls: ['./hello-world-page.component.css']
})
export class HelloWorldPageComponent implements OnInit {

  ok: boolean = false;

  changed($event) {
    console.debug('changed', $event.detail);
    this.ok = $event.detail;
  }

  constructor() { }

  ngOnInit() {
  }


}
