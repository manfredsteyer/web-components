import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: 'custom-checkbox'  // <-- extending custom element
})
export class CustomCheckboxDirective {

  @Output() checkedChange = new EventEmitter();

  @HostListener('changed', ['$event'])
  changed($event) {
    debugger;
    this.checkedChange.next($event.detail);
  }

}
