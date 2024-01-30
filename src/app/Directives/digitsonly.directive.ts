// digits-only.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDigitsOnly]'
})
export class DigitsOnlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: InputEvent) {
    const input = this.el.nativeElement as HTMLInputElement;
    const inputValue = input.value;

    // Remove non-digit characters from the input value
    const sanitizedValue = inputValue.replace(/\D/g, '');

    // Update the input value with only digits
    if (inputValue !== sanitizedValue) {
      input.value = sanitizedValue;
    }
  }
}
