import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  // TODO: Add selector that matches the web component (custom-checkbox)
  selector: 'custom-checkbox'
})
export class CustomCheckboxDirective {

  // TODO: Add @Output checkedChange to align with naming conventions
  // TODO: Add A HostListener for the custom element's changed event and trigger checkedChange
  @Output() checkedChange = new EventEmitter<boolean>();

  @HostListener('changed', ['$event'])
  changed($event) {
    this.checkedChange.next($event.detail);
  }
  // END

}
