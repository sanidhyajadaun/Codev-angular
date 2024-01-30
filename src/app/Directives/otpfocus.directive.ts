// otp-focus.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOtpFocus]'
})
export class OtpFocusDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: InputEvent) {
    const input = this.el.nativeElement as HTMLInputElement;
    const inputValue = input.value;

    if (/^\d$/.test(inputValue)) {
      const nextInput = input.nextElementSibling as HTMLInputElement;

      if (nextInput) {
        nextInput.focus();
      }
    } else if (inputValue === '' && event.inputType === 'deleteContentBackward') 
    {
      const previousInput = input.previousElementSibling as HTMLInputElement;
    
      if (previousInput && previousInput.value && input.selectionEnd !== 0) {
        previousInput.value = '';  // Clear the content of the current box
        previousInput.focus();
      }
    } 
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    if (event.code === 'Backspace') {
      const input = this.el.nativeElement as HTMLInputElement;
      const previousInput = input.previousElementSibling as HTMLInputElement;

      if (previousInput && input.selectionStart === 0 && !previousInput.value) 
      {
        previousInput.focus();  // Move focus to the previous box
        event.preventDefault(); // Prevent the default backspace behavior
      } else if (previousInput && input.selectionStart === 0) {
        previousInput.value = '';  // Clear the content of the current box
        previousInput.focus();  // Move focus to the previous box
        event.preventDefault(); // Prevent the default backspace behavior
      }
    }
  }
}
