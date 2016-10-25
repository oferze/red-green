import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[red-green]'
})
export class RedGreenDirective {

    @Input('red-green') set redGreen(value: boolean) {
        this.renderer.setElementClass(this.el.nativeElement, value ? 'green' : 'red', true);
    };

    constructor(private el: ElementRef, private renderer: Renderer) { }
}