// allowtextonly.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllowtextonly]'
})
export class AllowtextonlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^a-zA-Z\s]*/g, '').substring(0,50);
    
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
