// allownumbersonly.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAllownumbersonly]'
})
export class AllownumbersonlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initalValue = this.el.nativeElement.value;
    this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '').substring(0,10);
    // For mobile, set inputmode attribute
    this.el.nativeElement.setAttribute('inputmode', 'numeric');
    
    if (initalValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
