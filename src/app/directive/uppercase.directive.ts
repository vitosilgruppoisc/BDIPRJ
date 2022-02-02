import {
  Directive,
  ElementRef,
  forwardRef,
  HostListener,
  Renderer2,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[toUppercase]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => UppercaseDirective),
      multi: true,
    },
  ],
})
export class UppercaseDirective implements ControlValueAccessor {

  _onChange: (_: any) => void;
  _touched: () => void;

  constructor( @Self() private _el: ElementRef, private _renderer: Renderer2) { }

  @HostListener('keyup', ['$event'])
  onKeyDown(evt: KeyboardEvent) {
    this.manageEvent(evt);
  }

  @HostListener('blur', ['$event'])
  onBlur(evt: KeyboardEvent) {
    this._touched();
  }

  writeValue(value: any): void {
    this._renderer.setProperty(this._el.nativeElement, 'value', value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this._touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
  }

  private manageEvent(evt: KeyboardEvent) {
    const value = this._el.nativeElement.value.toUpperCase();
    this._renderer.setProperty(this._el.nativeElement, 'value', value);
    this._onChange(value);
    evt.preventDefault();
  }
}

