import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[red-green]'
})
export class RedGreenDirective {

    @Input('red-green') set redGreen(value: boolean) {
        this.renderer.setElementStyle(this.el.nativeElement, 'color', value ? 'green' : 'red');
    };

    constructor(private el: ElementRef, private renderer: Renderer) { }
}