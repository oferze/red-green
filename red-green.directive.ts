import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[red-green]'
})
export class RedGreenDirective {

    @Input('red-green') set redGreen(value: boolean) {

      // First explicitly remove the other color, if it's already set. Otherwise we'll be adding to an existing classList (though we do want adding in general, for other class names used)
      var classList = this.el.nativeElement.classList;
      if (value && classList.contains('red'))
          classList.remove('red');
      if (!value && classList.contains('green'))
          classList.remove('green');

      // Now add the required color
      this.renderer.setElementClass(this.el.nativeElement, value ? 'green' : 'red', true);
    };

    constructor(private el: ElementRef, private renderer: Renderer) { }
}